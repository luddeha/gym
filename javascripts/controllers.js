app.controller('SessionsCtrl', function($scope) {
  $scope.sessions = testSessions;
});

app.controller('SessionCtrl', function($scope, $routeParams) {
  $scope.params = $routeParams;
  $scope.exercises = testSessions[$routeParams['id']]['exercises'];
  $scope.uniqueMuscleGroups = getAllMuscleGroups($routeParams['id']);
  $scope.date = testSessions[$routeParams['id']]['date'];
});

app.controller('ExercisesCtrl', function($scope, exercises) {
  $scope.exercises = exercises.exercises;
  $scope.addExercise = function() {
    $scope.exercises.push(new exerciseType($scope.name, $scope.description, $scope.muscleGroup, $scope.imageLink));
  };
});