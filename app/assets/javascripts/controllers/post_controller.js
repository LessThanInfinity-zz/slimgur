Slimgur.PostController = Ember.ObjectController.extend({
	needs: ['posts'],
	percentValue: 100,
	progressBarWidth: null,

	numPoints: function(){
		var that = this;
		return that.get('numUpvotes') - that.get('numDownvotes');
	}.property('numUpvotes', 'numDownvotes'),

	popularity: function(){
		var that = this;
		var percent= ( that.get('numUpvotes')/(that.get('numUpvotes')+that.get('numDownvotes')) ) * 100;

		that.set('percentValue', percent);
		if (isNaN(percent)){
			return "width: 100%"
		} else {
			return "width: "+ percent.toString() + "%;";
		}

	}.property('numUpvotes','numDownvotes'),

  advancePost: function(delta) {
  	var that = this;
  	var posts = that.get('controllers.posts');
  	debugger
  	var index = posts.indexOf(that.get('content')) + delta;
  	if (index >= 0 && index <= posts.get('length')-1) {
    	that.transitionToRoute('post', posts.objectAt(index));
  	}
  	console.log('posts?', posts.get('posts').toArray());
  	// debugger
	},

	actions: {
	  nextPost: function() {
	    this.advancePost(1);
	  },
	  previousPost: function() {
	    this.advancePost(-1);
	  },
	}
})