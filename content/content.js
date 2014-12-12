(function() {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var actions = {
			clipPage: function() {
				chrome.runtime.sendMessage(chrome.runtime.id, {
					action: 'savePage',
					data: {
						title: 'sample title',
						head: document.getElementsByTagName('head')[0].innerHTML,
						body: document.getElementsByTagName('body')[0].innerHTML,
						srcURL: location.href
					}
				});
			}
		};

		if(request.action in actions) {
			actions[request.action]();
		}
	});
})();
