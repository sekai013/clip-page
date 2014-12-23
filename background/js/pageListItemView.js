App.PageListItemView = Backbone.View.extend({

	tagName: 'tr',

	/*
	model: App.Page
	 */

	render: function() {
		console.log(this.model.toJSON());
		var template = $('#page-list-item-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	}
});
