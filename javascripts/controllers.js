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
  $scope.session = $scope.sessions[$scope.id];
  $scope.allExercises = exercises.exercises;
  $scope.exercises = $scope.sessions[$scope.id].exercises;
  $scope.muscleGroups = muscleGroups;
  $scope.selectedGroup = $scope.muscleGroups[0];
  $scope.uniqueMuscleGroups = function(){
    var tempMuscleGroups = [];
    for(i = 0; i < $scope.exercises.length; i++){
      tempMuscleGroups.push($scope.exercises[i].muscleGroup);
    }
    return _.uniq(tempMuscleGroups);
  };
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
  $scope.muscleGroups = muscleGroups;

  $scope.addExercise = function() {
	  if(!$scope.name || !$scope.description || !$scope.muscleGroup || !$scope.imageLink){
	    window.alert("Please fill in all the fields!");
	  }else{
    	$scope.exercises.unshift(new exerciseType($scope.name, $scope.description, $scope.muscleGroup, $scope.imageLink));
    }
  };
  $scope.resetForm = function() {
	  if($scope.name && $scope.description && $scope.muscleGroup && $scope.imageLink){
	  	  this.imageLink = null;
		  this.name = null;
		  this.description = null;
		  this.muscle = null;
		  this.image = null;
	  }
	}
});