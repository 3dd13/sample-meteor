Messages = new Meteor.Collection("messages");

if (Meteor.isClient) {
  Template.hello.messages = function() {
    return Messages.find();
  }
  
  Template.hello.events({
    'click input' : function () {
      Messages.insert({content: "New", name: "Eddie", created_at: new Date()});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
