FlowRouter.route('/', {
  action: () => {
    BlazeLayout.render("mainLayout");
  }
});

FlowRouter.route('/exercises/add', {
  action: () => {
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/exercises/:id', {
  action: (params) => {
    //console.log(params.id)
    BlazeLayout.render("mainLayout", {content: "addExercise"});
  }
});

FlowRouter.route('/exercises/browse', {
  action: () => {
    BlazeLayout.render("mainLayout", {content: "browseExercise"});
  }
});

FlowRouter.route('/routines/add', {
  action: () => {
    BlazeLayout.render("mainLayout", {content: "addRoutine"});
  }
});

FlowRouter.route('/routines/browse', {
  action: () => {
    BlazeLayout.render("mainLayout", {content: "browseRoutines"});
  }
});