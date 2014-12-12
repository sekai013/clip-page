var PageView = Backbone.View.extend({

	/*
	model: Page
	 */

	render: function() {
		var template = $('#page-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	}
});
