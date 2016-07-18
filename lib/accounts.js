Meteor.methods({
    insertAccount: function(newUser)
    {
            if(Meteor.userId() == null){
              check(newUser, {
                emailVar: String,
                passwordVar: String,
                userNameVar: String,
                locationVar: String              
              });
              Accounts.createUser({
                email: newUser.emailVar,
                password: newUser.passwordVar,
                username: newUser.userNameVar,
                profile:{
                  local: newUser.locationVar      
            }            
        });
            }
        else{
            console.log("Logout first!!!");
        }
    },
    updateAccount: function(account){
        var id = Meteor.userId();
        if(id != null){
            check(account, {
                localVar: String,
                usernameVar: String,
                emailVar: String
              });
            
        var acc = {
            $set: {
                    profile: {
             local: account.localVar  
            },
                    username: account.usernameVar,
                    emails:[{
                        address: account.emailVar,
                        verified: false
                    }] 
                   }
        }          
        Meteor.users.update(id, acc); 
        }
    }
});