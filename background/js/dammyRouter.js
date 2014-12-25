App.DammyRouter = Backbone.Router.extend({
	routes: {
		':notebookId/:index': 'showTargetPage'
	},

	showTargetPage: function(notebookId, index) {
		var notebook   = App.notebookCollection.get(notebookId);
		var pageOption = (typeof notebook !== 'undefined')? notebook.get('pages')[index]:null;

		if(pageOption) {
			pageOption.before = (typeof +index === 'number' && +index !== 0)? index-1:false;
			pageOption.next   = (typeof +index === 'number' && +index !== notebook.get('pages').length - 1)? +index+1:false;
		} else {
			pageOption = {
				title: 'Error!: Page Not Found'
			};
		}

		var pageControlView = new App.PageControlView({
			model: new App.Page(pageOption)
		});
		var pageView = new App.PageView({
			model: new App.Page(pageOption)
		});

		App.headerContainer.show(pageControlView);
		App.bodyContainer.show(pageView);
	}
});
