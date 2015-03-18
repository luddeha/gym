function exerciseType(name, desc, muscle, imageLink) {
  this.name = name;
  this.description = desc;
  this.muscle = muscle;
  this.image = imageLink;
}

function getAllMuscleGroups(id){
  var exercises = testSessions[id]['exercises'];
  var tempMuscleGroups = [];
  for(i = 0; i < exercises.length; i++){
  	tempMuscleGroups.push(exercises[i]['muscleGroup']);
  }
  return _.uniq(tempMuscleGroups);
}

var muscleGroups = ['Chest/Shoulders', 'Arms', 'Abs', 'Back', 'Legs'];