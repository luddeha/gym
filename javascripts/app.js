var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/welcome.html'
      }).
      when('/exercises/add', {
        templateUrl: 'templates/add_exercise.html'
      }).
      when('/session', {
        templateUrl: 'templates/session.html'
      }).
      when('/log', {
        templateUrl: 'templates/log.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);