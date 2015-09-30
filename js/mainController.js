lexy.controller('MainController', [function() {
  var self = this;

  self.posts = [];

  self.title = "";

  self.addPost = function() {

    var post = {title: self.title, upvotes: 0};
    if(post.title === '') { return; }
    self.posts.push(post);
    self.title = "";
  };

  self.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
