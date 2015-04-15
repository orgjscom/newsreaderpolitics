var mongoose = require('mongoose');


//module.exports.dbQuery = function(connectionQuery) {
    mongoose.connect('mongodb://newsreaderpolitics:newsreaderpolitics@ds055689.mongolab.com:55689/newsreaderpolitics');

    var News = mongoose.model('News', { name: String });

    var kitty = new Cat({ name: 'News1Random' });
    kitty.save(function (err) {
        if (err) {
            console.log('err');
        } else{
            console.log('ok');
        }

    });
//}


