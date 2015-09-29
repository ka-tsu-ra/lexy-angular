describe('MainController', function() {
  beforeEach(module('Lexy'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController');
  }));

  it('returns the string in testText', function() {
    expect(ctrl.test()).toEqual('yooo');
  });
});