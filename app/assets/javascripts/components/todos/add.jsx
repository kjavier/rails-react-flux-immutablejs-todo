modulejs.define('todoAdd', ['react', 'todoActions'], function(React, TodoActions) {
  var view = React.createClass({
    _onSubmit: function(e) {
      var form = React.findDOMNode(this.refs.formAddTodo);
      TodoActions.create($(form).serialize());

      var input = React.findDOMNode(this.refs.inputAddTodo);
      $(input).val('');

      e.preventDefault();
    },

    render: function() {
      return (
        <form className='form-horizontal' ref='formAddTodo' onSubmit={this._onSubmit}>
          <div className='form-group'>
            <div className='col-md-12'>
              <input type='text' className='form-control' name='todo[name]' ref='inputAddTodo'
                placeholder="Type here and hit 'Enter' when done" defaultValue='' />
            </div>
          </div>
        </form>
      );
    }
  });

  return view;
});
