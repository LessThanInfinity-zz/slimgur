Slimgur.SignInController = Ember.Controller.extend({
  actions : {
    signIn: function() {
      var controller = this;
      return Ember.$.post('/users/sign_in.json',
        {
          user:
          {
            email: this.get('email'),
            password: this.get('password')
          }
        },
        function(data) {
          location.reload();
          console.log('signed in');
          // controller.transitionTo('posts');
        },
        'json'
      ).fail(function() {
        alert("sign in failed!");
      }
      );
    }
  }
});