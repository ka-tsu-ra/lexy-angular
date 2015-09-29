describe('MainController', function() {
  beforeEach(module('Lexy'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController');
  }));

  it('posts contains an array of posts', function() {
    expect(ctrl.posts).toEqual([
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ]);
  });

  it('can add a post to the list of posts', function() {
    ctrl.title = 'New post!';
    ctrl.addPost();
    expect(ctrl.posts).toEqual([
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4},
      {title: 'New post!', upvotes: 0}]);
  });
});
