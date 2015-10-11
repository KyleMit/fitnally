Meteor.publish('singleExercise', (id) => {
  return Exercises.find(id);
})

Meteor.publish('allExercises', () => {
  return Exercises.find();
})
