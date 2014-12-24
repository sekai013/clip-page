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

		// method for manipulating 'pages'
		add: function(model) {
			model.set('index', this.pages.length);
			this.pages.push(model);
		},
		remove: function(index) {
			this.pages.splice(index, 0);
		}
	},
})

App.NotebookCollection = Backbone.Collection.extend({
	model: App.Notebook,
	localStorage: new Backbone.LocalStorage('clipPage') 
});
