app.controller('SessionsCtrl', function($scope) {
  $scope.sessions = testSessions;
});

app.controller('SessionCtrl', function($scope, $routeParams, exercises) {
  $scope.sessions = testSessions;
  $scope.params = $routeParams;
  $scope.id = $routeParams.id || testSessions.length;
  if(!$scope.sessions[$scope.id]) {
    $scope.sessions[$scope.id] = {
      date: new Date(),
      exercises: []
    };
  }
  $scope.allExercises = exercises.exercises;
  $scope.exercises = $scope.sessions[$scope.id].exercises;
  $scope.muscleGroups = muscleGroups;
  $scope.selectedGroup = $scope.muscleGroups[0];
  $scope.uniqueMuscleGroups = getAllMuscleGroups($routeParams['id']);
  $scope.date = testSessions[$routeParams['id']]['date'];
  $scope.addExerciseToSession = function() {
    $scope.exercises.push({
      exercise: $scope.selectedExercise.name,
      muscleGroup: $scope.selectedExercise.muscle,
      sets: $scope.sets,
      reps: $scope.reps,
      weight: $scope.weight
    });
  };
});

app.controller('ExercisesCtrl', function($scope, exercises) {
  $scope.exercises = exercises.exercises;
  $scope.addExercise = function() {
    $scope.exercises.push(new exerciseType($scope.name, $scope.description, $scope.muscleGroup, $scope.imageLink));
  };
});