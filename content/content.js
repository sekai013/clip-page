(function() {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var actions = {
			clipPage: function() {
				var title  = window.prompt('Enter title:');
				var head   = document.getElementsByTagName('head')[0].innerHTML;
				var body   = document.getElementsByTagName('body')[0].innerHTML;

				chrome.runtime.sendMessage(chrome.runtime.id, {
					action: 'savePage',
					data: {
						title : title,
						head  : head,
						body  : body
					}
				});
			}
		};

		if(request.action in actions) {
			actions[request.action]();
		}
	});
})();
