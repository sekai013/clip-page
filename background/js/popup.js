window.App = {};

$(function() {
	function initializeNotebooks() {
		var notebookCollection = new App.NotebookCollection([{
			title: '無題のノートブック',
			pages: []
		}, {
			title: '無題のノートブック222',
			pages: []
		}]);

		notebookCollection.each(function(notebook) {
			notebook.save();
		});

		var id0 = notebookCollection.at(0).get('id');
		var id1 = notebookCollection.at(1).get('id');
		notebookCollection.at(0).set('pages', [{
			title: 'testtitle',
			body : 'testpage',
			notebookId: id0,
			index: 0
		}]);
		notebookCollection.at(1).set('pages', [{
			title: 'testtitle',
			body : 'testpage',
			notebookId: id1,
			index: 0
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
