chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"title": "Clip This Page",
		"id"   : "clipPage",
		"contexts": ["all"]
	});
});

var onClickHandler = function(info, tab) {
	chrome.tabs.sendMessage(tab.id, { action: 'clipPage' });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var actions = {
		savePage: function() {
			var pageCollection = new PageCollection();

			pageCollection.fetch();
			pageCollection.create({
				title : request.data.title,
				body  : request.data.body,
				links : request.data.links,
				styles: request.data.styles
			});
			pageCollection.each(function(page) {
				page.save();
			});
		}
	};

	if(request.action in actions) {
		actions[request.action]();
	}
});
