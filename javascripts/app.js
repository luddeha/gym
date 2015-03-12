var app = angular.module('app', ['ngRoute']);

// Test data
var testSessions = [{
    date: new Date(2015, 1, 10),
    exercises: [
    {
      exercise: 'Bench press',
      sets: 3,
      reps: 10,
      weight: 70,
    },
    {
      exercise: 'Squats',
      sets: 3,
      reps: 10,
      weight: 70,
    }]
  },
  {
    date: new Date(2015, 1, 13),
    exercises: [
    {
      exercise: 'Bench press',
      sets: 3,
      reps: 10,
      weight: 70,
    },
    {
      exercise: 'Squats',
      sets: 3,
      reps: 10,
      weight: 70,
    }]
  }
];

// Controllers
app.controller('SessionCtrl', ['$scope', function($scope) {
  $scope.sessions = testSessions;
}]);

// Routes
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
        templateUrl: 'templates/log.html',
        controller: 'SessionCtrl'
      }).
      when('/test', {
        templateUrl: 'templates/link_banner.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);