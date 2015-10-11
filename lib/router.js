FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render("mainLayout");
  }
});

FlowRouter.route('/add-exercise', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/browse-exercises', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "browseExercise"});
  }
});

FlowRouter.route('/add-routine', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addRoutine"});
  }
});

FlowRouter.route('/browse-routines', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "browseRoutines"});
  }
});