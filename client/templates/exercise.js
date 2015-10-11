Template.exercise.helpers({
  "exercise": () => {
    // path: /exercise/edit/:id
    let id = FlowRouter.getParam('id');
    console.log(id);
    return Exercises.findOne(id);
  }
});

Template.exercise.events({
  "submit form": (event) => {
    event.preventDefault();

    // get values from form
    let n = event.target.inputName.value;
    let d = event.target.inputDescription.value;
    let t = event.target.inputType.value;

    // insert into db
    let exerciseId = Exercises.insert({
      name: n,
      description: d,
      type: t
    });

    FlowRouter.go('/exercises/' + exerciseId);
  }
});

Template.exercise.onRendered(
  () => {
    // initialize material library
    $.material.init()
});