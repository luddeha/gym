var app = angular.module('app', ['templates','ngRoute'])

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'test.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);