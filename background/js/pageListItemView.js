App.PageListItemView = Backbone.View.extend({

	tagName: 'tr',

	/*
	model: App.Page
	 */

	events: {
		'click .btn-delete': 'onClickDelete'
	},

	render: function() {
		var template = $('#page-list-item-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	},

	onClickDelete: function() {
		var notebook = App.notebookCollection.get(this.model.get('notebookId'));
		var index = this.model.get('index');
		var pages = notebook.get('pages');

		pages.splice(index, 1);
		for(var i = index; i < pages.length; i++) {
			pages[i].index = i;
		}
		notebook.save();
		this.trigger('deletePage');
	}
});
