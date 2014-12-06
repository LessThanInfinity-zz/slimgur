Slimgur.PostsController = Ember.ArrayController.extend({
	testProperty: "This is a test",
	sortProperties: ['popularity'],
	sortAscending: true,

	actions: {
		sort: function(sortBy){
			var that = this;
			console.log('sortPopularity fired.');
			that.set('sortProperties', [sortBy]);
		}
	}
})