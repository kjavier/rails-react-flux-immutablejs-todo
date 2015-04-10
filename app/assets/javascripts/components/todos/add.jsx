modulejs.define('todoAdd', ['react', 'immutableRenderMixin', 'todoActions', 'todoForm'], function(React,
  ImmutableRenderMixin, TodoActions, TodoForm) {

  var view = React.createClass({
    displayName: 'TodoAdd',

    mixins: [ImmutableRenderMixin],

    _onSubmit: function(e) {
      var todoForm = this.refs.addForm;
      var form = React.findDOMNode(todoForm.refs.formTodo);
      var input = React.findDOMNode(todoForm.refs.inputTodo);

      e.preventDefault();
      TodoActions.create($(form).serialize());
      $(input).val('');
    },

    render: function() {
      console.log('Render Add');

      return <TodoForm ref='addForm' onSubmit={this._onSubmit} editingEnabled={true} />;
    }
  });

  return view;
});
