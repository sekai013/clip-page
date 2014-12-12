$(function() {
	function initializePages() {
		var pageCollection = new PageCollection([{
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

	var pageCollection = new PageCollection();
	var mainContainer = new Container({
		el: '#main-container'
	});

	pageCollection.fetch().then(function(pages) {
		if(pages.length === 0) {
			var models = initializePages();
			pageCollection.reset(models);
		}
	});

	var pageListView = new PageListView({
		pageCollection: pageCollection
	});
	mainContainer.show(pageListView);
});
