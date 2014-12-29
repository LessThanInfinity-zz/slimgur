Slimgur.PostsNewController = Ember.Controller.extend({
  actions: {
    createPost: function() {
      // debugger
      var post = this.store.createRecord('post', this.get('fields')
      );
      var self = this;
      post.save().then(function() {
        console.log('post created!');
        self.transitionTo('post', post);
        self.set('title', '');
        self.set('body', '');
      }, function() {
        alert('failed to create post!');
      });
    }
  }
});