App.PageView = Backbone.View.extend({

	/*
	model: App.Page
	 */

	render: function() {
		var template = $('#page-view-template').html();
		console.log(template);
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());
		console.log(html);

		this.$el.append(html);
		return this;
	}
});
