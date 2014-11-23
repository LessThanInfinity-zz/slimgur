Slimgur.Comment = DS.Model.extend({
	parentID: DS.attr('number'),
	body: DS.attr('string'),

	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date'),

	postID: DS.attr('number'),
	userID: DS.attr('number'),

	commentedBy: DS.attr('string'),

	post: DS.belongsTo('post', {async: true}),
	// parent: DS.belongsTo('comment', {async: true}),
	// children: DS.hasMany('comment', {async: true})
});