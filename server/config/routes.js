console.log("-->routes.js");
// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
// First, at the top of your routes.js file you'll have to require the controller
var friends = require('./../controllers/friends.js');
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
  app.get('/friends', friends.index);
  // app.post('/new', function(req, res){
  //     friends.new(req, res);
  //
  // });
};
