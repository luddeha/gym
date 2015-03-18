var app = angular.module('app', ['ngRoute']);

// Test data
var testSessions = {1: {
    id: 1,
    date: new Date(2015, 1, 10),
    exercises: [
    {
      exercise: 'Bench press',
      muscleGroup: 'Chest/Shoulders',
      sets: 3,
      reps: 10,
      weight: 70,
    },
    {
      exercise: 'Squats',
      muscleGroup: 'Legs',
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
      muscleGroup: 'Chest/Shoulders',
      sets: 3,
      reps: 10,
      weight: 70,
    },
    {
      exercise: 'Squats',
      muscleGroup: 'Legs',
      sets: 3,
      reps: 10,
      weight: 70,
    }]
  }
};

var exerciseTypes = [];

var muscleGroups = ['Chest/Shoulders', 'Arms', 'Abs', 'Back', 'Legs'];

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

function getAllMuscleGroups(id){

}

// Factories

app.factory('exercises', [function(){
  var object = {
    exercises: exerciseTypes
  };
  return object;
}]);

// Controllers
app.controller('SessionsCtrl', function($scope) {
  $scope.sessions = testSessions;
});

app.controller('SessionCtrl', function($scope, $routeParams) {
  $scope.params = $routeParams;
  $scope.exercises = testSessions[$routeParams['id']]['exercises'];
});

app.controller('ExercisesCtrl', function($scope, exercises) {
  $scope.exercises = exercises.exercises;
  $scope.addExercise = function() {
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