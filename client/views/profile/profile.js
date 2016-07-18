Template.profile.helpers({
   user: function(){
       var userInfo = {
           username: Meteor.user().username,
           email: Meteor.user().emails[0].address,
           profile: Meteor.user().profile
       }
       return userInfo;
   },
   locations: function(){
       var r = Cities.find(); 
       return r;
   }
});

Template.profile.events({
    'submit form': function(event){
        event.preventDefault();
        var oldpass =   event.target.oldPassword.value;
        var newpass = event.target.newPassword.value;
        var account = {           
            localVar: event.target.location.value,
            usernameVar: event.target.userName.value,
            emailVar: event.target.registerEmail.value
        }
        Meteor.call("updateAccount", account, function(error){
        if (error)
            alert(error.reason); 
    });
        if (newpass != '' && oldpass != '') {           Accounts.changePassword(oldpass,         newpass, function(error){
                alert(error.reason);
                Router.go('profile');
        });
        }
        Router.go('chat');       
    }
});

