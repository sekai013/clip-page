App.NotebookListItemView = Backbone.View.extend({

	tagName: 'tr',

	/*
	model: App.Notebook
	 */

	render: function() {
		var template = $('#notebook-list-item-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	}
});
