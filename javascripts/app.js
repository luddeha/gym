var app = angular.module('app', ['ngRoute']);

// Test data
var testSessions = {1: {
    id: 1,
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
  2: {
    id: 2,
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
};

var exerciseTypes = [];

function addTestData() {
  exerciseTypes.push(new exerciseType('Bench Press', 'The most awesome exercise of them all!', 'Chest', 'http://i.imgur.com/SQa017K.gif'));
}
// Models

function exerciseType(name, desc, muscle, imageLink) {
  this.name = name;
  this.description = desc;
  this.muscle = muscle;
  this.image = imageLink;
}
// Controllers
app.controller('SessionsCtrl', function($scope) {
  $scope.sessions = testSessions;
});

app.controller('SessionCtrl', function($scope, $routeParams) {
  $scope.params = $routeParams;
  // TODO: something like $scope.exercises =
});

app.controller('ExercisesCtrl', function($scope) {
  $scope.exercises = exerciseTypes;
  $scope.addExercise = function() {
    console.log('nej')
    $scope.exercises.push(new exerciseType($scope.name, $scope.description, $scope.muscleGroup, $scope.imageLink));
  };
});

// Routes
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/welcome.html'
      }).
      when('/exercises/add', {
        templateUrl: 'templates/add_exercise.html',
        controller: 'ExercisesCtrl'
      }).
      when('/session', {
        templateUrl: 'templates/session.html'
      }).
      when('/log', {
        templateUrl: 'templates/log.html',
        controller: 'SessionsCtrl'
      }).
      when('/log/:id', {
        templateUrl: 'templates/log_session.html',
        controller: 'SessionCtrl'
      }).
      when('/test', {
        templateUrl: 'templates/link_banner.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

addTestData();