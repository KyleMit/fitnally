FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render("mainLayout");
  }
});

FlowRouter.route('/exercises/add', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/exercises/edit/:id', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/exercises/browse', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "browseExercise"});
  }
});

FlowRouter.route('/routines/add', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "addRoutine"});
  }
});

FlowRouter.route('/routines/browse', {
  action: function () {
    BlazeLayout.render("mainLayout", {content: "browseRoutines"});
  }
});