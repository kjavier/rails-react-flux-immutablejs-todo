modulejs.define('todoActions', ['api', 'todoConstants'], function(Api, TodoConstants) {
  var API_URL = '/todos';

  var actions = {
    create: function(params) {
      var api = new Api(API_URL, TodoConstants.CREATE);
      api.post(params);
    }
  };

  return actions;
});
