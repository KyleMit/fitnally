Exercises = new Meteor.Collection('exercises');

Meteor.methods({
 'insertExercise': (exercise, id) => {
   //checks
   //check(Meteor.userId(), String);

   // get user
   //var user = Meteor.user();

   // insert into db
   let result = Exercises.upsert(id, exercise);

   console.log(result);

   // return ID
   return {
     _id: result.insertedId || id
   }
 }
});