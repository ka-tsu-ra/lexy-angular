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
      ctrl.title = 'New post!';
      ctrl.addPost();
      expect(ctrl.posts).toEqual([
        {title: 'New post!', upvotes: 0}]);
    });
  });
});
