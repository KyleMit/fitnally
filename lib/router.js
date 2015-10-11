FlowRouter.route('/', {
  name: 'home',
  action: () => {
    BlazeLayout.render("mainLayout");
  }
});

FlowRouter.route('/exercises/add', {
  name: "exercise-add",
  action: () => {
    BlazeLayout.render("mainLayout", {content: "exercise"});
  }
});

FlowRouter.route('/exercises/:id', {
  name: "exercise-detail",
  action: (params) => {
    //console.log(params.id)
    BlazeLayout.render("mainLayout", {content: "exercise"});
  }
});

//FlowRouter.route('/routines/:id', {
//  action: () => {
//    BlazeLayout.render("mainLayout", {content: "routine"});
//  }
//});