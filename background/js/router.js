App.Router = Backbone.Router.extend({
	routes: {
		'clip-page'    : 'showClipPage',
		'notebooks/:id': 'showPages',
		'notebooks'    : 'showNotebooks',
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
					url  : currentTab.url
				})
			});

			App.mainContainer.show(clipPageView);
		});
	},

	showPages: function() {
		var pageListView = new App.PageListView({
			pageCollection: App.pageCollection
		});
		
		App.mainContainer.show(pageListView);
	},

	showNotebooks: function() {
	},

	defaultRoute: function() {
		this.showClipPage();
		this.navigate('clip-page');
	}
});
