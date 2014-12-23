(function() {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var actions = {
			clipPage: function() {
				var title  = window.prompt('Enter title:');
				var body   = document.body.innerHTML;
				var linkCollection  = document.head.getElementsByTagName('link');
				var styleCollection = document.head.getElementsByTagName('style');
				var links = [], styles = [];

				if(!title) {
					return;
				}

				for(var i = 0; i < linkCollection.length; i++) {
					links.push({
						rel : linkCollection[i].rel,
						href: linkCollection[i].href
					});
				}
				for(var i = 0; i < styleCollection.length; i++) {
					styles.push({
						innerText: styleCollection[i].innerText
					});
				}

				chrome.runtime.sendMessage(chrome.runtime.id, {
					action: 'savePage',
					data: {
						title : title,
						body  : body,
						links : links,
						styles: styles,
						notebookId: request.notebookId
					}
				});
			}
		};

		if(request.action in actions) {
			actions[request.action]();
		}
	});
})();
