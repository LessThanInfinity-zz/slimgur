Slimgur.PostsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('post');
    // return Slimgur.Post.find();
	},
})

