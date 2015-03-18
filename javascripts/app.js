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

function addTestData() {
  exerciseTypes.push(new exerciseType('Bench Press', 'The most awesome exercise of them all!', 'Chest', 'http://i.imgur.com/SQa017K.gif'));
}

addTestData();