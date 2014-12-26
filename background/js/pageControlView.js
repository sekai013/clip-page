App.PageControlView = Backbone.View.extend({

	/*
	model: App.Page 
	 */

	render: function() {
		var template = $('#page-control-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	}
});
