App.PageView = Backbone.View.extend({

	/*
	model: Page
	 */

	render: function() {
		var template = $('#page-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());
		var self = this;

		$(html).not('script').appendTo(self.$el);
		this.renderLinks();
		this.renderStyles();
		return this;
	},

	renderLinks: function() {
		var $insertionPoint = this.$('#styles');
		this.model.get('links').forEach(function(link) {
			var linkElem = document.createElement('link');
			$(linkElem).prop('rel', link.rel).prop('href', link.href).appendTo($insertionPoint);
		});
	},

	renderStyles: function() {
		var $insertionPoint = this.$('#styles');
		this.model.get('styles').forEach(function(style) {
			var styleElem = document.createElement('style');
			$(styleElem).html(style.innerText).appendTo($insertionPoint);
		});
	}
});
