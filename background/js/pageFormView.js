App.PageFormView = Backbone.View.extend({

	/*
	model: App.Page
	 */

	events: {
		'submit form': 'onSubmitForm'
	},

	render: function() {
		var template = $('#page-form-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	},

	onSubmitForm: function(e) {
		e.preventDefault();

		if($('#title').val()) {
			var attributes = {};

			attributes.title = $('#title').val();
			this.trigger('submitForm', attributes);
		}
	}
});
