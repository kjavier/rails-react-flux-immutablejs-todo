modulejs.define('todoActions', ['api', 'todoConstants'], function(Api, TodoConstants) {
  var API_URL = '/todos';

  var actions = {
    create: function(params) {
      var api = new Api(API_URL, TodoConstants.CREATE);
      api.post(params);
    },

    update: function(params, id) {
      var url = API_URL + '/' + id;
      var api = new Api(url, TodoConstants.UPDATE);
      api.update(params);
    },

    destroy: function(id) {
      var url = API_URL + '/' + id;
      var api = new Api(url, TodoConstants.DESTROY);
      api.destroy();
    }
  };

  return actions;
});
