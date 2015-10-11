Template.exercise.onCreated(function() {
  this.autorun(() => {
    let id = FlowRouter.getParam('id');
    this.subscribe('singleExercise', id)
  })
})

Template.exercise.helpers({
  "exercise": () => {
    // path: /exercise/edit/:id
    let id = FlowRouter.getParam('id');

    return Exercises.findOne(id);
  }
});

Template.exercise.events({
  "submit form": (event, template) => {
    event.preventDefault();


    // get values from form
    let n = event.target.inputName.value;
    let d = event.target.inputDescription.value;
    let t = event.target.inputType.value;

    let e = {
      name: n,
      description: d,
      type: t
    }

    // grab id (if we have one)
    let id = FlowRouter.getParam('id')

    console.log('id' + id)


    Meteor.call('insertExercise', e, id,
      (error, result) => {
        FlowRouter.go('/exercises/' + result._id);
    });

  }
});

Template.exercise.onRendered(
  () => {
    // initialize material library
    $.material.init()
});