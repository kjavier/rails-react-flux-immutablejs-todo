modulejs.define('todoStore', ['jquery', 'eventEmitter', 'appDispatcher', 'immutable', 'todoConstants'],
  function(_, EventEmitter, AppDispatcher, Immutable, TodoConstants) {

  var CHANGE_EVENT = 'todo_changed';
  var EDIT_ENABLE_EVENT = 'todo_edit_enabled';

  var _todos = Immutable.OrderedMap();

  function set(params) {
    _todos = _todos.set(params.id, Immutable.fromJS(params));
  }

  function destroy(params) {
    _todos = _todos.delete(params.id);
  }

  var TodoStore = {
    all: function() { return _todos; },

    getInitialData: function() {
      var todos = $.parseJSON($('#TodosData').html()).todos;

      if (todos.length > 0) $.each(todos, function(index, value) { set(value); });

      return _todos;
    },

    emitChange: function() { this.emit(CHANGE_EVENT); },

    emitEditEnable: function() { this.emit(EDIT_ENABLE_EVENT); },

    addChangeListener: function(callback) { this.on(CHANGE_EVENT, callback); },

    addEditEnableListener: function(callback) { this.on(EDIT_ENABLE_EVENT, callback); },

    removeChangeListener: function(callback) { this.removeListener(CHANGE_EVENT, callback); },

    removeEditEnableListener: function(callback) { this.removeListener(EDIT_ENABLE_EVENT, callback); },
  };

  _.extend(TodoStore, EventEmitter.prototype);

  AppDispatcher.register(function(payload) {
    switch (payload.actionType) {
    case TodoConstants.CREATE:
      set(payload.values.todo);
      TodoStore.emitChange();
      break;

    case TodoConstants.UPDATE:
      set(payload.values.todo);
      TodoStore.emitChange();
      break;

    case TodoConstants.DESTROY:
      destroy(payload.values.todo);
      TodoStore.emitChange();
      break;
    }
  });

  return TodoStore;
});
