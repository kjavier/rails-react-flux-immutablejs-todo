modulejs.define('todoList', ['react', 'immutableRenderMixin', 'todoStore', 'todoAdd', 'todoShow'],
  function(React, ImmutableRenderMixin, TodoStore, TodoAdd, TodoShow) {

  var view = React.createClass({
    displayName: 'TodoIndex',

    mixins: [ImmutableRenderMixin],

    getInitialState: function() {
      return { collection: TodoStore.getInitialData() };
    },

    componentDidMount: function() {
      TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      TodoStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState({ collection: TodoStore.all() });
    },

    render: function() {
      var todoRows = [];

      this.state.collection.forEach(function(model) {
        todoRows.push(<TodoShow key={'todo-' + model.get('id')} model={model} />)
      });

      return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
              <TodoAdd />

              <div className='list-group'>
                {todoRows}
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return view;
});
