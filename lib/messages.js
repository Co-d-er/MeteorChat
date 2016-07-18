Messages = new Mongo.Collection('messages');

Meteor.methods({
  messageInsert: function(messageAttributes) {
    check(this.userId, String);
    check(messageAttributes,{
        title: String
    } );

    var date = new Date();
    var d = date.toDateString() + " " + date.toLocaleTimeString();
      
    var user = Meteor.user();
    var message = _.extend(messageAttributes, {
      userId: user._id, 
      username: user.username, 
      datatime: d,
      local: user.profile.local
    });

    var messageId = Messages.insert(message);

    return {
      _id: messageId
    };
  }
});