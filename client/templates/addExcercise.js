Template.addExercise.events({
  "submit form": function (event) {
    event.preventDefault();

    console.log(event.target);

    // get values from form
    let n = event.target.inputName.value;
    let d = event.target.inputDescription.value;
    let t = event.target.inputType.value;

    // insert into db
    var exercise = Exercises.insert({
      name: n,
      description: d,
      type: t
    });

    // clear form
    event.target.inputName.value = "";
    event.target.inputDescription.value = "";
    event.target.inputType.checked = false;

    FlowRouter.go('/')
    //FlowRouter.go('/exercise/'+exercise._id)
  }
});

Template.addExercise.onRendered(
  () => {
    // initialize material library
    $.material.init()
});