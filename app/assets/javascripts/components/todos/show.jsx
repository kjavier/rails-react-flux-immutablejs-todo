modulejs.define('todoShow', ['react', 'immutableRenderMixin', 'todoStore', 'todoActions', 'todoForm'],
  function(React, ImmutableRenderMixin, TodoStore, TodoActions, TodoForm) {

  var view = React.createClass({
    displayName: 'TodoShow',

    propTypes: {
      model: React.PropTypes.object
    },

    mixins: [ImmutableRenderMixin],

    getInitialState: function() {
      return { editingEnabled: false };
    },

    componentDidMount: function() {
      TodoStore.addEditEnableListener(this._onEditEnable);
    },

    componentWillUnMount: function() {
      TodoStore.removeEditEnableListener(this._onEditEnable);
    },

    _onClick: function(e) {
      if (!$(e.target).hasClass('btn')) {
        TodoStore.emitEditEnable();
        this.setState({ editingEnabled: true });
      }
    },

    _onEditEnable: function() {
      if (this.isMounted()) {
        this.setState({ editingEnabled: false });
      } else {
        TodoStore.removeEditEnableListener(this._onEditEnable);
      }
    },

    _onSubmit: function(e) {
      var todoForm = this.refs.editForm;
      var form = React.findDOMNode(todoForm.refs.formTodo);
      var input = React.findDOMNode(todoForm.refs.inputTodo);

      e.preventDefault();
      TodoActions.update($(form).serialize(), this.props.model.get('id'));
      this._onEditEnable();
    },

    _onDelete: function(e) {
      e.preventDefault();
      TodoStore.emitEditEnable();
      TodoActions.destroy(this.props.model.get('id'));
    },

    render: function() {
      return (
        <a href='javascript:;' className='list-group-item' ref='todoShow' onClick={this._onClick}>
          <TodoForm ref='editForm' model={this.props.model} editingEnabled={this.state.editingEnabled}
            onSubmit={this._onSubmit} onDelete={this._onDelete} />
        </a>
      );
    }
  });

  return view;
});
