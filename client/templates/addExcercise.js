Template.addExercise.helpers({
  "exercise": () => {
    // path: /exercise/edit/:id
    let id = FlowRouter.getParam('id');
    console.log(id);
    return Exercises.findOne(id);
  }
});


Template.addExercise.events({
  "submit form": (event) => {
    event.preventDefault();

    console.log(event.target);

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

    // clear form
    event.target.inputName.value = "";
    event.target.inputDescription.value = "";
    event.target.inputType.checked = false;


    //FlowRouter.go('/')
    FlowRouter.go('/exercises/' + exerciseId);
  }
});

Template.addExercise.onRendered(
  () => {
    // initialize material library
    $.material.init()
});