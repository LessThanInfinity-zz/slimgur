Slimgur.User = DS.Model.extend({
	username: DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date'),
	
	posts: DS.hasMany('post', {async: true})
});
