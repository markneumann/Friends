console.log("---> friends controller");
// this is our friends.js file located at /server/controllers/friends.js
// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('friends');
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        index: function(req, res) {
            console.log("index: ", req.url);
            Friend.find()
            .then(function(results){
                    res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        create: function(req, res) {
            // console.log("new req: ", req.body);
            var newFriend = new Friend({
                name: req.body.name,
                age: req.body.age
            });
            // console.log("newFriend: ",newFriend);
            newFriend.save()
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        remove: function(req, res) {
            console.log("remove req: ", req.paramss);
            Friend.remove({_id: req.params.id})
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        }


    };
})();
