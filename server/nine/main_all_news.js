var mongoose = require('mongoose');
module.exports = {
    index: function(req, res) {
        var userView  = "../www/views/product/product";
        res.render(userView);
//        res.end();
    },
    result: function(req, res) {
        var News2 = mongoose.model('News', { name: String });
        var kitty = new News2();
        var result = kitty.find();
        res.json(result);
        res.end();
    },

};