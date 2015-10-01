describe('MainController', function() {
  beforeEach(module('Lexy'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController');
  }));

  it('initialises with an empty list of posts and empty new post box', function() {
    expect(ctrl.newPost).toBeUndefined();
    expect(ctrl.posts).toEqual([]);
  });

  describe('when adding a new post', function() {

    it('adds the new post to the list of posts', function() {
      makePost();
      expect(ctrl.posts).toEqual([
        {title: 'New post!', body: 'All the post text...', upvotes: 0}]);
    });

    it('clears the title and body once the post has been added', function() {
      makePost();
      expect(ctrl.title).toEqual('');
      expect(ctrl.body).toEqual('');
    });
  });

  describe('when upvoting a post', function() {

    it('increments the number of upvotes', function() {
      ctrl.posts = [{ title: 'Post!', upvotes: 0 }];
      var post = ctrl.posts[0];
      ctrl.incrementUpvotes(post);
      expect(ctrl.posts).toEqual([
        { title: 'Post!', upvotes: 1 }]);
    });
  });

  function makePost() {
    ctrl.title = 'New post!';
    ctrl.body = 'All the post text...';
    ctrl.addPost();
  }
});
