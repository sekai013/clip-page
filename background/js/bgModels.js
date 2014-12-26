var Page = Backbone.Model.extend({
	'defaults': {
		title : '',
		head  : '',
		links : [],
		styles: []
	}
});

var Notebook = Backbone.Model.extend({
	defaults: {
		title: '',
		pages: []
	},
})

var NotebookCollection = Backbone.Collection.extend({
	model: Notebook,
	chromeStorage: new Backbone.ChromeStorage('clipPage', 'local') 
});
