//FlowRouter.route('/', {
//  name: "home",
//  action: function () {
//    BlazeLayout.render('applicationLayout', {
//      header: 'navbar',
//      main: 'home'//,
//   //   footer: 'footerTemplate'
//    });
//  }
//});


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