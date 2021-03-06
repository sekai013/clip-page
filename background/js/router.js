App.Router = Backbone.Router.extend({
	routes: {
		'clip-page'                : 'showClipPage',
		'notebooks'                : 'showNotebooks',
		'notebooks/:id/edit'       : 'showEditNotebook',
		'notebooks/:id/:index/edit': 'showEditPage',
		'notebooks/:id'            : 'showNotebookPages',
		'new-notebook'             : 'showCreateNewNotebook',
		'*actions'                 : 'defaultRoute'
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

	showEditNotebook: function(id) {
		var notebook = App.notebookCollection.get(id);
		var notebookFormView = new App.NotebookFormView({
			model: notebook
		});
		var self = this;

		notebookFormView.on('submit:form', function(attributes) {
			notebook.set('title', attributes.title);
			notebook.save();
			self.showNotebooks();
			self.navigate('notebooks');
		});
		
		App.mainContainer.show(notebookFormView);
	},

	showEditPage: function(id, index) {
		var notebook = App.notebookCollection.get(id);
		var pageOption = notebook.get('pages')[index];
		var pageFormView = new App.PageFormView({
			model: new App.Page(pageOption)
		})
		var self = this;

		pageFormView.on('submitForm', function(attributes) {
			Object.keys(attributes).forEach(function(key) {
				pageOption[key] = attributes[key];
			});
			notebook.get('pages').splice(index, 1, pageOption);
			notebook.save();
			self.navigate('notebooks/' + id);
			self.showNotebookPages(id);
		});

		App.mainContainer.show(pageFormView);
	},

	showNotebookPages: function(id) {
		var notebook = App.notebookCollection.get(id);
		var pageListView = new App.PageListView({
			pages: notebook.get('pages')
		});
		
		App.mainContainer.show(pageListView);
	},

	showCreateNewNotebook: function() {
		var notebookFormView = new App.NotebookFormView({
			model: new App.Notebook()
		});
		var self = this;

		notebookFormView.on('submitForm', function(attributes) {
			var newNotebook = new App.Notebook({
				title: attributes.title
			});

			App.notebookCollection.add(newNotebook);
			App.notebookCollection.each(function(notebook) {
				notebook.save();
			});

			self.showNotebooks();
			self.navigate('notebooks');
		});
		
		App.mainContainer.show(notebookFormView);
	},

	defaultRoute: function() {
		this.showClipPage();
		this.navigate('clip-page');
	}
});
