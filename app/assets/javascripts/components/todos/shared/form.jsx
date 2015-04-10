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
          <form className='form-horizontal' ref='formTodo' onSubmit={this.props.onSubmit}>
            <div className='form-group'>
              <div className='col-md-12'>
                <input type='text' className='form-control' name='todo[name]' ref='inputTodo'
                  placeholder="Type here and hit 'Enter' when done" defaultValue={value} />
              </div>
            </div>
          </form>
        );
      } else {
        html = (
          <div className='clearfix'>
            <div className='pull-left'>{value}</div>
            <button className='btn btn-default btn-sm pull-right' type='button' onClick={this.props.onDelete}>Delete</button>
          </div>
        );
      }

      return html;
    }
  });

  return view;
});
