Template.addExercise.events({
  "submit form": function (event) {
    event.preventDefault();

    let n = event.target.inputName.value;
    let d = event.target.inputDescription;
    let t = event.target.inputType;

    Exercises.insert({
      name: n,
      description: d,
      type: t
    });

    event.target.inputName.value = "";
    event.target.inputDescription = ""
  }
});