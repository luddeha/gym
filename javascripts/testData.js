var testSessions = [{
    id: 0,
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
  {
    id: 1,
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
];

var exerciseTypes = [];

function addTestData() {
  exerciseTypes.push(new exerciseType('Bench Press', 'The person performing the exercise lies on their back with a weight grasped in both hands. They push the weight upwards until their arms are extended, not allowing the elbows to lock. They then lower the weight to chest level. This is one repetition (rep).', 'Chest/Shoulders', 'http://ultrafitnesstraining.com/wp-content/uploads/2011/09/Bench-Press.gif'));
  exerciseTypes.push(new exerciseType('Squats', 'The movement begins from a standing position. Weights are often used, either in the hand or as a bar braced across the trapezius muscle or rear deltoid muscle in the upper back.[3] The movement is initiated by moving the hips back and bending the knees and hips to lower the torso and accompanying weight, then returning to the upright position.', 'Legs', 'http://www.fitandfurious.com/wp-content/uploads/2011/12/BarbellSquat.gif'));
  exerciseTypes.push(new exerciseType('Dips', 'To perform a dip, the exerciser hangs from a dip bar or from a set of rings with his arms straight down and shoulders over his hands, then lowers his body until his arms are bent to a 90 degree angle at the elbows, and then lifts his body up, returning to the starting position. Short people are able to cope better with a narrower grip, but not with a wider one.', 'Arms', 'http://staminasportsnutrition.com/dips.gif'));
  exerciseTypes.push(new exerciseType('Deadlift', 'Deadlift refers to the lifting of dead (without momentum) weight, such as weights lying on the ground. It is one of the few standard weight training exercises in which all repetitions begin with dead weight. There are two positions one can approach when doing the deadlift, which include the conventional deadlift and sumo-deadlift. In most other lifts there is an eccentric (lowering of the weight) phase followed by the concentric (lifting of the weight) phase.', 'Back', 'http://ultrafitnesstraining.com/wp-content/uploads/2011/08/Deadlift.gif'));
  exerciseTypes.push(new exerciseType('Crunches', 'A crunch begins with lying face up on the floor with knees bent. The movement begins by curling the shoulders towards the pelvis. The hands can be behind or beside the neck or crossed over the chest. Injury can be caused by pushing against the head or neck with hands.', 'Abs', 'http://mihg2.com/wp/wp-content/uploads/2014/05/crunches.gif'));
  exerciseTypes.push(new exerciseType('Biceps Curl', 'The fullest range of motion is when the elbows begin in full extension, in a supine grip. The biceps contract to lift the weight upward through an arc, to a point where further movement is not possible.', 'Arms', 'http://www.fitandfurious.com/wp-content/uploads/2012/01/StandingHammerCurls.gif'));
}

addTestData();