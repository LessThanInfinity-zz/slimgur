Slimgur.UserRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('user', params.id);

		// 	return this.store.find('user', params.id).then(function(rec){
		// 	debugger
		// });
		// debugger
	},
})
