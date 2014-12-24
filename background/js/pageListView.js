App.PageListView = Backbone.View.extend({

	tagName  : 'table',
	className: 'table',

	/*
	 pages: array of object to create App.Page
	 */

	initialize: function(option) {
		this.pages = option.pages;
	},

	events: {
		'change .notebook-selector': 'onChangeNotebookSelector'
	},

	onChangeNotebookSelector: function() {
		var newNotebookId = this.$('#notebook-selector').val();

		location.href = location.pathname + '#notebooks/' + newNotebookId;
	},

	renderNotebookSelector: function() {
		var $notebookSelector = this.$('#notebook-selector');
		var notebookId = location.hash.slice(11);

		App.notebookCollection.each(function(notebook) {
			var option = document.createElement('option');

			$(option).attr({ 'value': notebook.id, 'id': notebook.id }).text(notebook.get('title')).appendTo($notebookSelector);
		});
		this.$('#' + notebookId)[0].selected = true;
	},

	renderPage: function() {
		var $insertionPoint = this.$('.page-list-item-container');

		this.pages.forEach(function(page) {
			var pageListItemView = new App.PageListItemView({
				model: new App.Page(page)
			});

			$insertionPoint.append(pageListItemView.render().$el);
		});
	},

	render: function() {
		var template = $('#page-list-view-template').html();

		this.$el.html(template);
		this.renderNotebookSelector();
		this.renderPage();
		return this;
	}
});
