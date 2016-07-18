Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('cities'); }
});

Router.map(function() {
  this.route('startPage', {path: '/'});

  this.route('chat', {path: '/chat'});
    
  this.route('profile', {path: '/profile'});
    
  this.route('registration', {path: '/registration'});  
});

var requireLogin = function() {
  if (! Meteor.user()) {   
    if (Meteor.loggingIn()) {     
      this.render(this.loadingTemplate);    
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'chat'});

