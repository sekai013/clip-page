App.ClipPageView = Backbone.View.extend({

	/*
	model: App.Page
	 */

	events: {
		'click .btn-clip': 'onClickClip'
	},

	renderNotebookSelector: function() {
		var $notebookSelector = this.$('#notebook-selector');

		App.notebookCollection.each(function(notebook) {
			var option = document.createElement('option');

			$(option).attr('value', notebook.id).text(notebook.get('title')).appendTo($notebookSelector);
		});
	},

	render: function() {
		var template = $('#clip-page-view-template').html();
			console.log('tes');
		var compiled = _.template(template);
			console.log('tes');
		var html     = compiled(this.model.toJSON());

		this.$el.append(html);
		this.renderNotebookSelector();
		return this;
	},

	onClickClip: function() {
		var notebookId = this.$('#notebook-selector').val();

		this.model.set('notebookId', notebookId);
		chrome.tabs.sendMessage(this.model.get('tabId'), { action: 'clipPage', notebookId: notebookId });
	}
});
