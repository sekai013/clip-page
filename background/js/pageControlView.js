App.PageControlView = Backbone.View.extend({

	/*
	model: Page 
	 */

	render: function() {
		var template = $('#page-control-view-template').html();
		var compiled = _.template(template);
		var html = compiled({
			title : this.model.get('title'),
			before: './dammy.html?notebookId=' + this.model.get('notebookId') + '&index=' + (this.model.get('index') - 1),
			next  : './dammy.html?notebookId=' + this.model.get('notebookId') + '&index=' + (this.model.get('index') + 1)
		});

		this.$el.append(html);
		return this;
	}
});
