App.NotebookFormView = Backbone.View.extend({

	events: {
		'submit form': 'onSubmitForm'
	},
	
	render: function() {
		var template = $('#new-notebook-view-template').html();
		var compiled = _.template(template);
		var html = compiled(this.model.toJSON());

		this.$el.append(html);
		return this;
	},

	onSubmitForm: function(e) {
		e.preventDefault();

		var attributes = {};

		attributes.title = $('#title').val();
		this.trigger('submit:form', attributes);
	}
});
