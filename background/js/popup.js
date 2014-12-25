window.App = {};

$(function() {
	function initializeNotebooks() {
		var notebookCollection = new App.NotebookCollection([{
			title: 'マイノートブック',
			pages: []
		}]);
		notebookCollection.each(function(notebook) {
			notebook.save();
		});

		return notebookCollection.models;
	};

	App.notebookCollection = new App.NotebookCollection();
	App.mainContainer = new App.Container({
		el: '#main-container'
	});

	App.notebookCollection.fetch().then(function(notebooks) {
		if(notebooks.length === 0) {
			var models = initializeNotebooks();
			App.notebookCollection.reset(models);
		}

		App.router = new App.Router();
		Backbone.history.start();
	});
});
