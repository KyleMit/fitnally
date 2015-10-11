Meteor.startup(
  () => {
    if (Games.find().count() === 0) {
      //Games.insert(
      //)
    }
  }
)