var express  = require('express');
var http = require('http');
var path = require('path');
var routes = require('./server/routes');
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
app.use(express.static(path.join(__dirname, 'www')));
app.use('/bower_components',express.static(path.join(__dirname, 'bower_components')));

var index  = "../www/index";
app.get('/', function(req, res){
    res.render(index);
});
var mongoose = require('mongoose');


//module.exports.dbQuery = function(connectionQuery) {
mongoose.connect('mongodb://newsreaderpolitics:newsreaderpolitics@ds055689.mongolab.com:55689/newsreaderpolitics');

var News = mongoose.model('News', { name: String });

var kitty = new News({ name: 'News1Random' });
kitty.save(function (err) {
    if (err) {
        console.log('err');
    } else{
        console.log('ok');
    }

});
//}



//routes.initialize(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});