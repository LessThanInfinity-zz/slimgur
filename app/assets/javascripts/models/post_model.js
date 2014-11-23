// for more details see: http://emberjs.com/guides/models/defining-models/

Slimgur.Post = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),

	imageFileName: DS.attr('string'),
	imageContentType: DS.attr('string'),
	imageFileSize: DS.attr('number'),
	imageUpdatedAt: DS.attr('date'),

	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date'),

	userId: DS.attr('number'),
	user: DS.attr('string'),
	tagList: DS.attr('string'),
	uploadedBy: DS.attr('string'),

	comments: DS.hasMany('comment', {async: true})
	// user: DS.belongsTo('user')
});
