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

    // insert into db
    let result = Exercises.upsert(id, e);

    // get resulting ID or id from route
    let resultID = result.insertedId || id

    FlowRouter.go('/exercises/' + resultID);
  }
});

Template.exercise.onRendered(
  () => {
    // initialize material library
    $.material.init()
});