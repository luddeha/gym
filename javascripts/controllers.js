app.controller('SessionsCtrl', function($scope) {
  $scope.sessions = testSessions;
});

app.controller('SessionCtrl', function($scope, $routeParams, $filter, exercises) {
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
  $scope.$watch('selectedGroup', function() {
    $scope.selectedExercise = null;
  });
  $scope.$watch('selectedExercise', function() {
    if(!$scope.selectedExercise) {
      return;
    }
    var previous;
    $scope.sessions.forEach(function(sess) {
      sess.exercises.forEach(function(exercise) {
        if(exercise.exercise && $scope.selectedExercise && exercise.exercise.toLowerCase() === $scope.selectedExercise.name.toLowerCase()){
          previous = exercise;
        }
      });
    });
    previous = previous || {};
    $scope.weight = previous.weight;
    $scope.sets = previous.sets;
    $scope.reps = previous.reps;
  });
  $scope.uniqueMuscleGroups = function(){
    var tempMuscleGroups = [];
    for(i = 0; i < $scope.exercises.length; i++){
      tempMuscleGroups.push($scope.exercises[i].muscleGroup);
    }
    return _.uniq(tempMuscleGroups).sort();
  };
  $scope.addExerciseToSession = function() {
  	if(!$scope.selectedExercise || !$scope.selectedExercise.name || !$scope.selectedExercise.muscle || isNaN($scope.sets) || isNaN($scope.reps) || isNaN($scope.weight) || !$scope.sets || !$scope.reps || !$scope.weight){
	    window.alert("Please fill in all the fields and use numbers where appropriate!");
	}else{
      $('.add-success').css('opacity', 1).animate({opacity: 0}, 2000)
	    $scope.exercises.push({
	      exercise: $scope.selectedExercise.name,
	      muscleGroup: $scope.selectedExercise.muscle,
	      sets: $scope.sets,
	      reps: $scope.reps,
	      weight: $scope.weight
	    });
	}
  };
  $scope.deleteExerciseFromSession = function(name, sets, reps, weight, index) {
    var first = true;
  	$scope.exercises = _.reject($scope.exercises, function(currentExercise){
  		if(first && currentExercise.exercise === name && currentExercise.sets === sets && currentExercise.reps === reps && currentExercise.weight === weight){
  			first = false;
        return true;
  		}
  		return false;
  	});
  };
});

app.controller('ExercisesCtrl', function($scope, exercises) {
  $scope.exercises = exercises.exercises;
  $scope.muscleGroups = muscleGroups;

  $scope.addExercise = function() {
	  if(_.find($scope.exercises, function(currentExercise){ 
	  		return (currentExercise.name.toLowerCase() === $scope.name.toLowerCase()); 
	  	})){
	    window.alert("Name is already taken!");
  	  }else if(!$scope.name || !$scope.description || !$scope.muscleGroup || !$scope.imageLink){
	    window.alert("Please fill in all the fields!");
	  }else{
      $('.add-success').css('opacity', 1).animate({opacity: 0}, 2000)
    	$scope.exercises.unshift(new exerciseType($scope.name, $scope.description, $scope.muscleGroup, $scope.imageLink));
    }
  };
  $scope.deleteExcercise = function(name) {
  	if(!confirm("Are you sure you want to delete this exercise?")){
  		return;
  	}
  	$scope.exercises = _.reject($scope.exercises, function(currentExercise){
  		if(currentExercise.name === name){
  			return true;
  		}
  		return false;
  	});
  };
  $scope.resetForm = function() {
	  if($scope.name && $scope.description && $scope.muscleGroup && $scope.imageLink){
	  	  this.imageLink = null;
		  this.name = null;
		  this.description = null;
		  this.muscle = null;
		  this.image = null;
	  }
	};
});