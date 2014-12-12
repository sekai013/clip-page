$(function() {
	var queryString = window.location.href.slice(window.location.href.indexOf('?') + 1);
	var pageId = queryString.slice(queryString.indexOf('id=') + 3);
	var pageCollection = new PageCollection();

	pageCollection.fetch();

	var page = pageCollection.get(pageId) || new Page({
		title: 'Error: Page Not Found!',
		body : 'This page is not found on storage.'
	});
	var bodyContainer = new Container({
		el: '#body-container'
	});
	var pageView = new PageView({
		model: page
	});

	bodyContainer.show(pageView);
});
