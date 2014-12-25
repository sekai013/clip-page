App.Page = Backbone.Model.extend({
	'defaults': {
		title : '',
		head  : '',
		links : [],
		styles: []
	}
});

/*
App.PageCollection = Backbone.Collection.extend({
	model: App.Page,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
*/

App.Notebook = Backbone.Model.extend({
	defaults: {
		title: '',
		pages: [],
	},
})

App.NotebookCollection = Backbone.Collection.extend({
	model: App.Notebook,
	chromeStorage: new Backbone.ChromeStorage('clipPage', 'local') 
});
