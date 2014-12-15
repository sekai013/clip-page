var PageView = Backbone.View.extend({

	/*
	model: Page
	 */

	render: function() {
		var template = $('#page-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.renderStyle();
		this.$el.append(html);
		return this;
	},

	renderStyle: function() {
		var $head = $(this.model.get('head'));

		$head.each(function(index) {
			if(this.tagName !== undefined && (this.tagName === 'LINK' || this.tagName === 'STYLE')) {
				$(this).appendTo($('head'));
			}
		});
	}
});
