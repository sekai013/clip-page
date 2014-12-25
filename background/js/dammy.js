window.App = {};

$(function() {
	App.notebookCollection = new App.NotebookCollection();

	App.notebookCollection.fetch().then(function() {
		App.headerContainer = new App.Container({
			el: '#header-container'
		});
		App.bodyContainer = new App.Container({
			el: '#body-container'
		});

		App.router = new App.DammyRouter();
		Backbone.history.start();
	});
});
