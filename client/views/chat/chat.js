Template.chat.helpers({
  messages: function(){
      var r = Messages.find();
      return r;
  }, 
  curruser: function(){
      var s = Meteor.user().profile.local;
      Meteor.subscribe('messages', s);
      return Meteor.user().username;
  }
});

Template.chat.events({
  'submit form': function(e) {
    e.preventDefault();
    var body = event.target.body;
    var message = {
        title: body.value
    };
    
    Meteor.call("messageInsert", message, function(error){
        if (error)
            return alert(error.reason);
        Router.go('startPage'); 
    });
    body.value = '';
  },
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout(function(){Router.go('startPage');});
        }
});