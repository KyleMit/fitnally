Template.exercisesList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('allExercises')
  })
})

Template.exercisesList.helpers({
  "exercises": () => {
    return Exercises.find();
  }
});