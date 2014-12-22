App.PageListItemView = Backbone.View.extend({

	tagName: 'tr',

	/*
	model: Page
	 */

	render: function() {
		var template = $('#page-list-item-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	}
});
