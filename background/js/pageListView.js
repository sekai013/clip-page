App.PageListView = Backbone.View.extend({

	tagName  : 'table',
	className: 'table',

	/*
	 pages: array of object to create App.Page
	 */

	initialize: function(option) {
		this.pages = option.pages;
	},

	renderPage: function() {
		var $insertionPoint = this.$('.page-list-item-container');

		this.pages.forEach(function(page) {
			console.log(page);
			var pageListItemView = new App.PageListItemView({
				model: new App.Page(page)
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
