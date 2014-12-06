Slimgur.ApplicationController = Ember.Controller.extend({
	needs: ['currentUser'],
	currentUserController: function(){
		var that = this;
		var currUserController = that.get('controllers.currentUser');
		return currUserController
	}.property('controllers.currentUser'),

	currentUser: function(){
		var that = this;
		var currUserController = that.get('currentUserController');
		return currUserController.get('model');

	}.property('controllers.currentUser'),
  signedIn: false
});