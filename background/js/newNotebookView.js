App.NewNotebookView = Backbone.View.extend({

	events: {
		'submit form': 'onSubmitForm'
	},
	
	render: function() {
		var html = $('#new-notebook-view-template').html();

		this.$el.html(html);
		return this;
	},

	onSubmitForm: function(e) {
		e.preventDefault();

		var attributes = {};

		attributes.title = $('#title').val();
		this.trigger('submit:form', attributes);
	}
});
