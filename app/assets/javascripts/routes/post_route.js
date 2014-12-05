Slimgur.PostRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('post', params.id);
		// return Slimgur.Post.find(params.id);
		// return [{title: 'fixture'}, {title: '2'}]
	},
  // renderTemplate: function() {
  //     this.render('post', { into: 'application' });
  // }

})