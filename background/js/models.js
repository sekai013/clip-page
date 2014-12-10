App.Page = Backbone.Model.extend({
	'defaults': {
		title: '',
		head : '',
		body : ''
	}
});

App.PageCollection = Backbone.Collection.extend({
	model: App.Page,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
