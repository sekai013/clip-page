App.PageListView = Backbone.View.extend({

	tagName: 'table',

	/*
	 pageCollection: App.PageCpllection
	 */

	initialize: function(option) {
		this.pageCollection = option.pageCollection;
	},

	renderPage: function() {
		var $insertionPoint = this.$('.page-list-item-container');

		this.pageCollection.each(function(page) {
			var pageListItemView = new App.PageListItemView({
				model: page
			});

			$insertionPoint.append(pageListItemView.render().$el);
		});
	},

	render: function() {
		var template = $('#page-list-view-template').html();

		this.$el.html(template);
		this.renderPage();
		return this;
	}
});