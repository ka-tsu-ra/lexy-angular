describe('MainController', function() {
  beforeEach(module('Lexy'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController');
  }));

  it('posts contains an array of posts', function() {
    expect(ctrl.posts).toEqual(['post 1', 'post 2', 'post 3', 'post 4', 'post 5']);
  });
});