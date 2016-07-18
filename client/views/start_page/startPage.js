  Template.startPage.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        
        Meteor.loginWithPassword(emailVar, passwordVar, function(error){if(error) alert(error.reason);});      
    },
    'click button':function(){
        Router.go('registration');
    }
});

  Template.startPage.helpers({
      chat:function(){
          Router.go('chat');
      }
  });