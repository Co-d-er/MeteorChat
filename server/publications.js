Meteor.publish('cities', function() {
  return Cities.find();
});

Meteor.publish('messages', function(l) {
  check(l, String);
  return Messages.find({local: l} );
});