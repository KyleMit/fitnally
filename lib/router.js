FlowRouter.route('/', {
  name: "home",
  action: function () {
    BlazeLayout.render('applicationLayout', {
      header: 'navbar',
      main: 'home'//,
   //   footer: 'footerTemplate'
    });
  }
});