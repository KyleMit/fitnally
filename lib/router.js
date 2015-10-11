FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render("mainLayout");
  }
});

FlowRouter.route('/exercise/add', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/exercises/:id', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/exercises/browse', {
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