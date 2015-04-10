modulejs.define('todoStore', ['jquery', 'eventEmitter', 'appDispatcher', 'immutable', 'todoConstants'],
  function(_, EventEmitter, AppDispatcher, Immutable, TodoConstants) {

  var CHANGE_EVENT = 'todo_changed';

  var _todos = Immutable.OrderedMap();

  function set(params) {
    _todos = _todos.set(params.id, Immutable.fromJS(params))
  }

  //function destroy(params) {
  //  _elements = _elements.delete(params.element.id, Immutable.fromJS(params))
  //}

  var TodoStore = {
    all: function() { return _todos; },

    getInitialData: function() {
      var todos = $.parseJSON($('#TodosData').html()).todos;

      if (todos.length > 0) $.each(todos, function(index, value) { set(value); });

      return _todos;
    },

    emitChange: function() { this.emit(CHANGE_EVENT); },

    addChangeListener: function(callback) { this.on(CHANGE_EVENT, callback); },

    removeChangeListener: function(callback) { this.removeListener(CHANGE_EVENT, callback); },
  };

  _.extend(TodoStore, EventEmitter.prototype);

  AppDispatcher.register(function(payload) {
    console.log("PAYLOAD", payload);

    switch (payload.actionType) {
    case TodoConstants.CREATE:
      set(payload.values.todo);
      TodoStore.emitChange();
      break;
    }
  });

  return TodoStore;
});
