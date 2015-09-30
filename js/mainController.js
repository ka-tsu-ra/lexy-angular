lexy.controller('MainController', [function() {
  var self = this;

  self.posts = [];

  self.title = "";

  self.addPost = function() {
    var post = {title: self.title, upvotes: 0};
    self.posts.push(post);
  };
}]);
