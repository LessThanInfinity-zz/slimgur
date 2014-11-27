Slimgur.PostController = Ember.ObjectController.extend({
	percentValue: 100,
	progressBarWidth: null,

	numPoints: function(){
		var that = this;
		return that.get('numUpvotes') - that.get('numDownvotes');
	}.property('numUpvotes', 'numDownvotes'),

	popularity: function(){
		var that = this;
		var percent= ( that.get('numUpvotes')/(that.get('numUpvotes')+that.get('numDownvotes')) ) * 100;
		// var progressBarStyle= "width: "+ percent.toString() + "%;";
		// debugger
		that.set('percentValue', percent);
		if (isNaN(percent)){
			return "width: 100%"
		} else {
			return "width: "+ percent.toString() + "%;";
		}

		// debugger
		// that.set('progressBarWidth', progressBarStyle);

	}.property('numUpvotes','numDownvotes'),
	// uploadedBy: function(){
	// 	return this.store.find
	// }
})