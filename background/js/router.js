App.Router = Backbone.Router.extend({
	routes: {
		'clip-page'    : 'showClipPage',
		'notebooks'    : 'showNotebooks',
		'notebooks/:id': 'showNotebookPages',
		'*actions'     : 'defaultRoute'
	},

	showClipPage: function() {
		var query = {
			active  : true,
			windowId: chrome.windows.WINDOW_ID_CURRENT
		};

		chrome.tabs.query(query, function(tabs) {
			var currentTab = tabs[0];
			var clipPageView = new App.ClipPageView({
				model: new App.Page({
					title: currentTab.title,
					url  : currentTab.url,
					tabId: currentTab.id
				})
			});

			App.mainContainer.show(clipPageView);
		});
	},

	showNotebookPages: function(id) {
		var notebook = App.notebookCollection.get(id);
		var pageListView = new App.PageListView({
			pages: notebook.get('pages')
		});
		
		App.mainContainer.show(pageListView);
	},

	showNotebooks: function() {
		var notebookListView = new App.NotebookListView({
			notebookCollection: App.notebookCollection
		});
		
		App.mainContainer.show(notebookListView);
	},

	defaultRoute: function() {
		this.showClipPage();
		this.navigate('clip-page');
	}
});
