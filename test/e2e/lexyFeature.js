describe('lexy forum', function() {

  var title = element(by.model('mainCtrl.title'));
  var postButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('prints all the posts', function() {
    title.sendKeys('A new post!');
    postButton.click();

    var posts = element.all(by.repeater('post in mainCtrl.posts'));

    expect(posts.getText()).toContain('A new post! - upvotes: 0');
  });

  it('the new post box resets to empty after a new post is added', function() {
    title.sendKeys('Wooooooo');
    postButton.click();
    expect(title.getText()).toEqual("");
  });
});