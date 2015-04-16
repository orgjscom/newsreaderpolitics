var express  = require('express');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');
var routes = require('./server/routes');
var jsdom = require("jsdom");
var app = express();

app.engine('html', require('hogan-express'));
app.set('view options', {layout: true});
app.set('layout', 'layout');
app.enable('view cache');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'www/globalnews')));
app.use('/bower_components',express.static(path.join(__dirname, 'bower_components')));

var index  = "../www/globalnews/index";
app.get('/', function(req, res){
    res.render(index);
});

mongoose.connect('mongodb://newsreaderpolitics:newsreaderpolitics@ds055689.mongolab.com:55689/newsreaderpolitics');
var News = mongoose.model('News', { name: String });




jsdom.env({
    url: "http://www.unian.ua/",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (errors, window) {
        var $ = window.$;
        console.log("HN Links");
        $(".left_top ul.main_all_news li a ").each(function() {
            var text = $(this).text()
                console.log(" -", text);
        /////
            var kitty = new News({ name: text });
            kitty.save();

        });
    }
});



routes.initialize(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});