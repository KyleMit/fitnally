Template.addExercise.events({
  "submit form": function (event) {
    event.preventDefault();

    console.log(event.target);

    // get values from form
    let n = event.target.inputName.value;
    let d = event.target.inputDescription;
    let t = event.target.inputType;

    // insert into db
    Exercises.insert({
      name: n,
      description: d,
      type: t
    });

    // clear form
    event.target.inputName.value = "";
    event.target.inputDescription = "";
    event.target.inputType.checked = false;
  }
});

Template.addExercise.onRendered(
  () => {
    // initialize material library
    $.material.init()
});