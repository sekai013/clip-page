App.Page = Backbone.Model.extend({
	'defaults': {
		title : '',
		head  : '',
		links : [],
		styles: []
	}
});

App.PageCollection = Backbone.Collection.extend({
	model: App.Page,
	localStorage: new Backbone.LocalStorage('pageClip') 
});

/*
App.Notebook = Backbone.Model.extend({
	defaults: {
		title: '',
		pages: [],
		add  : function(model) {
			model.set('index', this.models.length);
			this.models.push(model);
		}
	},
})

App.NotebookCollection = Backbone.Collection.extend({
	model: App.Notebook,
	localStorage: new Backbone.LocalStorage('pageClip') 
});
*/
