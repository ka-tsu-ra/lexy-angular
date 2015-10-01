var lexy = angular.module('Lexy', ['ngResource', 'ui.router']);

lexy.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainController as mainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);
