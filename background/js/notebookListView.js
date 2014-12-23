App.NotebookListView = Backbone.View.extend({

	tagName: 'table',
	className: 'table',

	/*
	 notebookCollection: App.notebookCollection
	 */

	initialize: function(option) {
		this.notebookCollection = option.notebookCollection;
	},

	renderNotebook: function() {
		var $insertionPoint = this.$('.notebook-list-item-container');

		this.notebookCollection.each(function(notebook) {
			var notebookListItemView = new App.NotebookListItemView({
				model: notebook
			});

			$insertionPoint.append(notebookListItemView.render().$el);
		});
	},

	render: function() {
		var template = $('#notebook-list-view-template').html();

		this.$el.html(template);
		this.renderNotebook();
		return this;
	}
});
