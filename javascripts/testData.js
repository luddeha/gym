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
  exerciseTypes.push(new exerciseType('Bench Press', 'The most awesome exercise of them all!', 'Chest/Shoulders', 'http://i.imgur.com/SQa017K.gif'));
  exerciseTypes.push(new exerciseType('Squats', 'The most awesome exercise of them all!', 'Legs', 'http://i.imgur.com/SQa017K.gif'));
}

addTestData();