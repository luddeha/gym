app.controller('SessionsCtrl', function($scope) {
  $scope.sessions = testSessions;
});

app.controller('SessionCtrl', function($scope, $routeParams) {
  $scope.sessions = testSessions;
  $scope.params = $routeParams;
  $scope.id = $routeParams.id || testSessions.length;
  if(!$scope.sessions[$scope.id]) {
    $scope.sessions[$scope.id] = {};
  }
  $scope.exercises = testSessions[$scope.id].exercises;
  $scope.muscleGroups = muscleGroups;
  $scope.uniqueMuscleGroups = getAllMuscleGroups($routeParams['id']);
  $scope.date = testSessions[$routeParams['id']]['date'];
});

app.controller('ExercisesCtrl', function($scope, exercises) {
  $scope.exercises = exercises.exercises;
  $scope.addExercise = function() {
    $scope.exercises.push(new exerciseType($scope.name, $scope.description, $scope.muscleGroup, $scope.imageLink));
  };
});