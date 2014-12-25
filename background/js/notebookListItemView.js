App.NotebookListItemView = Backbone.View.extend({

	tagName: 'tr',

	/*
	model: App.Notebook
	 */

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},

	events: {
		'click .btn-delete': 'onClickDelete'
	},

	render: function() {
		var template = $('#notebook-list-item-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	},

	onClickDelete: function() {
		this.model.destroy();
	}
});
