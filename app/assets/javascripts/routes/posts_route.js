Slimgur.PostsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('post');
    // return Slimgur.Post.find();
	},

  // renderTemplate: function() {
  //     this.render('posts', { into: 'application' });
  // }

  // setupController: function(controller, model){
  // 	this._super(controller,model);
  // 	controller.set('posts', model);
  // },
})

