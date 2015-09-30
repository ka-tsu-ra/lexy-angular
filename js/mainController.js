lexy.controller('MainController', [function() {
  var self = this;

  self.posts = [];

  self.title = "";
  self.body = "";

  self.addPost = function() {

    var post = {title: self.title, body: self.body, upvotes: 0};
    if(post.title === '' || post.body === '') { return; }
    self.posts.push(post);
    self.title = "";
    self.body = "";
  };

  self.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
