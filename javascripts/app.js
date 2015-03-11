var app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'templates/test.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);