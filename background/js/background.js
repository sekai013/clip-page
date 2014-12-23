chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var actions = {
		savePage: function() {
			var notebookCollection = new NotebookCollection();

			notebookCollection.fetch();

			var notebook = notebookCollection.get(request.data.notebookId);

			notebook.get('pages').push({
				index : notebook.get('pages').length,
				title : request.data.title,
				body  : request.data.body,
				links : request.data.links,
				styles: request.data.styles,
				notebookId: request.data.notebookId
			});
			notebookCollection.each(function(notebook) {
				notebook.save();
			});
		}
	};

	if(request.action in actions) {
		actions[request.action]();
	}
});
