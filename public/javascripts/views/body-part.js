var BodyPartView = Backbone.View.extend({
	el: '#hangman-image',
	className: 'img-responsive',
	template: _.template($('#hangman-image-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});