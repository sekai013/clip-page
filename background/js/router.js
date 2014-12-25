App.Router = Backbone.Router.extend({
	routes: {
		'clip-page'    : 'showClipPage',
		'notebooks'    : 'showNotebooks',
		'notebooks/:id': 'showNotebookPages',
		'new-notebook' : 'showCreateNewNotebook',
		'*actions'     : 'defaultRoute'
	},

	showClipPage: function() {
		var query = {
			active  : true,
			windowId: chrome.windows.WINDOW_ID_CURRENT
		};

		chrome.tabs.query(query, function(tabs) {
			var currentTab = tabs[0];
			var title = (currentTab.title.length < 40)? currentTab.title:currentTab.url.slice(0, 40) + '...';
			var clippable, urlRaw, urlShow;

			if(currentTab.url.indexOf('chrome://') !== 0) {
				clippable = true;
				urlRaw  = currentTab.url;
				urlShow = (decodeURI(currentTab.url).length < 65)? decodeURI(currentTab.url):decodeURI(currentTab.url).slice(0, 65) + '...';
			} else {
				clippable = false;
			}

			var clipPageView = new App.ClipPageView({
				model: new App.Page({
					title    : title,
					clippable: clippable,
					urlRaw   : urlRaw,
					urlShow  : urlShow,
					tabId    : currentTab.id
				})
			});

			App.mainContainer.show(clipPageView);
		});
	},

	showNotebooks: function() {
		var notebookListView = new App.NotebookListView({
			notebookCollection: App.notebookCollection
		});
		
		App.mainContainer.show(notebookListView);
	},

	showNotebookPages: function(id) {
		var notebook = App.notebookCollection.get(id);
		var pageListView = new App.PageListView({
			pages: notebook.get('pages')
		});
		
		App.mainContainer.show(pageListView);
	},

	showCreateNewNotebook: function() {
		var newNotebookView = new App.NewNotebookView();

		newNotebookView.on('submit:form', function(attributes) {
			var newNotebook = new App.Notebook({
				title: attributes.title
			});

			App.notebookCollection.add(newNotebook);
			App.notebookCollection.each(function(notebook) {
				notebook.save();
			});
		});
		
		App.mainContainer.show(newNotebookView);
	},

	defaultRoute: function() {
		this.showClipPage();
		this.navigate('clip-page');
	}
});
