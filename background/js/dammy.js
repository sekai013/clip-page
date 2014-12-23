window.App = {};

$(function() {
	var queryString = window.location.href.slice(window.location.href.indexOf('?') + 1);
	var hashes      = queryString.split('&');
	var hash        = {};

	hashes.forEach(function(hashString) {
		var key   = hashString.split('=')[0];
		var value = hashString.split('=')[1];

		hash[key] = value;
	});

	var notebookId = hash.notebookId;
	var index      = hash.index;
	var notebookCollection = new App.NotebookCollection();

	notebookCollection.fetch();

	var pageOption = notebookCollection.get(notebookId).get('pages')[index] || {
		title: 'Error: Page Not Found!',
		body : 'This page is not found on storage.'
	};
	var pageView = new App.PageView({
		model: new App.Page(pageOption)
	});
	var bodyContainer = new App.Container({
		el: '#body-container'
	});

	bodyContainer.show(pageView);
});
