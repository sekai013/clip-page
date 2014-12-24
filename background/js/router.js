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
					title  : (currentTab.title.length < 40)? currentTab.title:currentTab.url.slice(0, 40) + '...',
					urlAbs : currentTab.url,
					urlShow: (decodeURI(currentTab.url).length < 65)? decodeURI(currentTab.url):decodeURI(currentTab.url).slice(0, 65) + '...',
					tabId  : currentTab.id
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
