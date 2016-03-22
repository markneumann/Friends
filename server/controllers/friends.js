console.log("---> friends controller");
// this is our friends.js file located at /server/controllers/friends.js
// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('friends');
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        // notice how index in the factory(client side) is calling the index method(server side)
        index: function(req, res) {
            Friend.find({}, function(err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            });
        }
    };
})();
