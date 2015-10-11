FlowRouter.route('/', {
  name: "fitnally",
  action: function () {
    BlazeLayout.render('applicationLayout', {
      header: 'headerTemplate',
      main: 'gamesList',
      footer: 'footerTemplate'
    });
  }
});