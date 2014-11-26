Slimgur.PostController = Ember.ObjectController.extend({
	testProperty: "heluuursss",
	progressBarWidth: null,
	popularity: function(){
		var that = this;
		var percent= ( that.get('numUpvotes')/(that.get('numUpvotes')+that.get('numDownvotes')) ) * 100;
		// var progressBarStyle= "width: "+ percent.toString() + "%;";
		// debugger

		if (isNaN(percent)){
			return "width: 0%"
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