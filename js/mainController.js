lexy.controller('MainController', ['postsFactory', function(postsFactory) {
  var self = this;

  self.posts = postsFactory.posts;

  self.title = "";
  self.body = "";

  self.addPost = function() {
    console.log('yo');

    var post = {title: self.title, body: self.body, upvotes: 0};
    if(post.title === '' || post.body === '') { return; }
    postsFactory.posts.push(post);
    self.title = "";
    self.body = "";
  };

  self.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
