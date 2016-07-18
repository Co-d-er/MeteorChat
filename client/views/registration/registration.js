Template.registration.helpers({
  locations: function(){
      var r = Cities.find(); 
      return r;
  }
});

Template.registration.events({
    'submit form': function(event){
        event.preventDefault();
        
        var newUser = {
            emailVar:              event.target.registerEmail.value,
            passwordVar: event.target.registerPassword.value,
            userNameVar: event.target.userName.value,
            locationVar: event.target.location.value
        }
        Meteor.loginWithPassword(newUser.emailVar, newUser.passwordVar, function(error){ if(error) alert(error.reason); Router.go('registration');});
        
        Router.go('chat');                
    }
  });