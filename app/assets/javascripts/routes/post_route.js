Slimgur.PostRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('post', params.id);
		// return [{title: 'fixture'}, {title: '2'}]
	},

})