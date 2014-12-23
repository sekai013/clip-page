var Page = Backbone.Model.extend({
	'defaults': {
		title : '',
		head  : '',
		links : [],
		styles: []
	}
});

/*
var PageCollection = Backbone.Collection.extend({
	model: Page,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
*/

var Notebook = Backbone.Model.extend({
	defaults: {
		title: '',
		pages: []
	},
})

var NotebookCollection = Backbone.Collection.extend({
	model: Notebook,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
