lexy.controller('MainController', [function() {
  var self = this;

  self.testText = "yooo";

  self.test = function() {
    return(self.testText);
  };
}]);
