modulejs.define('todoForm', ['react', 'immutableRenderMixin'], function(React, ImmutableRenderMixin) {
  var view = React.createClass({
    displayName: 'TodoForm',

    propTypes: {
      model: React.PropTypes.object,
      onSubmit: React.PropTypes.func,
      editingEnabled: React.PropTypes.bool
    },

    mixins: [ImmutableRenderMixin],

    render: function() {
      var model = this.props.model;
      var value = '';
      var html;

      if (model) value = model.get('name');

      if (this.props.editingEnabled) {
        html = (
          React.createElement("form", {className: "form-horizontal", ref: "formTodo", onSubmit: this.props.onSubmit}, 
            React.createElement("div", {className: "form-group"}, 
              React.createElement("div", {className: "col-md-12"}, 
                React.createElement("input", {type: "text", className: "form-control", name: "todo[name]", ref: "inputTodo", 
                  placeholder: "Type here and hit 'Enter' when done", defaultValue: value})
              )
            )
          )
        );
      } else {
        html = (
          React.createElement("div", {className: "clearfix"}, 
            React.createElement("div", {className: "pull-left"}, value), 
            React.createElement("button", {className: "btn btn-default btn-sm pull-right", type: "button", onClick: this.props.onDelete}, "Delete")
          )
        );
      }

      return html;
    }
  });

  return view;
});
