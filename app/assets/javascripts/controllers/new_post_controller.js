Slimgur.NewController = Ember.Controller.extend({

  actions: {
    createPost: function() {
    	console.log('createPost fired');
    	// debugger
      var self = this;
      var post = this.store.createRecord('post', this.get('fields'));
      post.save().then(function() {
        self.transitionToRoute('post', post);
      });
    }
  }

});