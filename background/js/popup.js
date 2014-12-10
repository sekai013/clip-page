window.App = {};

$(function() {
	function initializePages() {
		var pageCollection = new App.PageCollection([{
			title: 'Test',
			body : 'This is test page'
		}, {
			title: 'tesuto',
			body : 'tesutodayo'
		}]);

		pageCollection.each(function(page) {
			page.save();
		});

		return pageCollection.models;
	};

	App.pageCollection = new App.PageCollection();
	App.mainContainer = new App.Container({
		el: '#main-container'
	});

	App.pageCollection.fetch().then(function(pages) {
		if(pages.length === 0) {
			var models = initializePages();
			App.pageCollection.reset(models);
		}
	});

	App.pageListView = new App.PageListView({
		pageCollection: App.pageCollection
	});
	App.mainContainer.show(App.pageListView);
});
