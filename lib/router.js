FlowRouter.route('/', {
  action: () => {
    BlazeLayout.render("mainLayout");
  }
});

FlowRouter.route('/exercises/add', {
  action: () => {
    BlazeLayout.render("mainLayout", {content: "exercise"});
  }
});

FlowRouter.route('/exercises/:id', {
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