// for more details see: http://emberjs.com/guides/views/

Slimgur.ApplicationView = Ember.View.extend({
  templateName: 'application',

  didInsertElement: function(){
  	var that = this;
  	console.log('in app page.');
  	// debugger
  }
});
