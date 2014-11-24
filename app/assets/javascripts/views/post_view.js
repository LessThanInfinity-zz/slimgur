// for more details see: http://emberjs.com/guides/views/

Slimgur.PostView = Ember.View.extend({
  templateName: 'posts/post',

  didInsertElement: function(){
  	console.log('in post page.');
  }
});
