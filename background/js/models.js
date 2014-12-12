var Page = Backbone.Model.extend({
	'defaults': {
		title: '',
		head : '',
		body : ''
	}
});

var PageCollection = Backbone.Collection.extend({
	model: Page,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
