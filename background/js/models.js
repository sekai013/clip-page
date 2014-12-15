var Page = Backbone.Model.extend({
	'defaults': {
		title : '',
		head  : '',
		links : [],
		styles: []
	}
});

var PageCollection = Backbone.Collection.extend({
	model: Page,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
