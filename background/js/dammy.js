window.App = {};

$(function() {
	var queryString = window.location.href.slice(window.location.href.indexOf('?') + 1);
	var pageId = queryString.slice(queryString.indexOf('id=') + 3);
	var pageCollection = new App.PageCollection();

	pageCollection.fetch();

	var page = pageCollection.get(pageId) || new App.Page({
		title: 'Error: Page Not Found!',
		body : 'This page is not found on storage.'
	});
	var bodyContainer = new App.Container({
		el: '#body-container'
	});
	var pageView = new App.PageView({
		model: page
	});

	bodyContainer.show(pageView);
});
