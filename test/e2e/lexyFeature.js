describe('lexy forum', function() {

  var title = element(by.model('mainCtrl.title'));
  var postButton = element(by.className('postBtn'));
  var posts = element.all(by.repeater('post in mainCtrl.posts'));
  var upvoteButton = element(by.className('upvoteBtn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('prints all the posts', function() {
    title.sendKeys('A new post!');
    postButton.click();

    expect(posts.getText()).toContain('A new post! - upvotes: 0');
  });

  describe('when adding a post', function() {

    it('the new post box resets to empty after a new post is added', function() {
      title.sendKeys('Wooooooo');
      postButton.click();
      expect(title.getText()).toEqual('');
    });

    it('a post with an empty title cannot be added', function() {
      title.sendKeys('A new post!');
      postButton.click();
      title.sendKeys('');
      postButton.click();
      expect(posts.getText()).toEqual(['A new post! - upvotes: 0']);
      // why does this text have a [] around it? must be the whole array which is missed out when you use the ng-repeat and only the elements inside it are printed used.
    });
  });

  describe('when upvoting a post', function() {

    xit('clicking the upvote button next to a post makes the number of upvotes for that post go up', function() {
      title.sendKeys('A new post!');
      postButton.click();
      upvoteButton.click();
      expect(posts.getText()).toEqual(['A new post! - upvotes: 1']);
    });

  });
});
