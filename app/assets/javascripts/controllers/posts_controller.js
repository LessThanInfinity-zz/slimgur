Slimgur.PostsController = Ember.ArrayController.extend({
	testProperty: "This is a test",
	// posts: function(){
	// 	var that = this;
	// 	console.log('posts fired. ', that.get('model').toArray())
	// 	return that.get('content');
	// }.property('model'),
	modelObserver: function(){
		var that = this;
		// return model;
		// that.set('posts', that.get('model'));
		// debugger
	}.observes('model'),

})