describe('lexy forum', function() {

  var title        = element(by.model('mainCtrl.title'));
  var body         = element(by.model('mainCtrl.body'));
  var postButton   = element(by.className('postBtn'));
  var posts        = element.all(by.repeater('post in mainCtrl.posts'));
  var upvoteButton = element(by.className('upvoteBtn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  describe('when adding a post', function() {

    it('displays a post once it has been added', function() {
      makePost();
      expect(posts.getText()).toContain('upvotes: 0 A new post! All the post text...');
    });

    it('the new post box resets to empty after a new post is added', function() {
      makePost();
      expect(title.getText()).toEqual('');
    });

    it('a post with an empty title cannot be added', function() {
      body.sendKeys('Post text');
      postButton.click();
      expect(posts.getText()).toEqual([]);
      // why does this text have a [] around it? must be the whole array which is missed out when you use the ng-repeat and only the elements inside it are printed used.
    });

    it('a post with an empty post body cannot be added', function() {
      title.sendKeys('A title');
      postButton.click();
      expect(posts.getText()).toEqual([]);
      // why does this text have a [] around it? must be the whole array which is missed out when you use the ng-repeat and only the elements inside it are printed used.
    });
  });

  describe('when upvoting a post', function() {

    it('clicking the upvote button next to a post increments the upvotes for that post by one', function() {
      makePost();
      upvoteButton.click();
      expect(posts.getText()).toEqual(['upvotes: 1 A new post! All the post text...']);
      // need to exclude the ^ from the test expectation somehow
    });
  });

  function makePost() {
    title.sendKeys('A new post!');
    body.sendKeys('All the post text...');
    postButton.click();
  }
});
