modulejs.define('api', ['jquery', 'appDispatcher'], function($, AppDispatcher) {
  var TOKEN = $('meta[name="csrf-token"]').attr('content');
  var TIMEOUT = 10000;

  function dispatch(key, params) {
    AppDispatcher.dispatch({
      actionType: key,
      values: params
    });
  }

  function ajaxCall(requestType, url, params, key) {
    var promise = $.ajax({
      type: requestType,
      url: url,
      data: params,
      dataType: 'json',
      timeout: TIMEOUT,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-Token', TOKEN);
      }
    });

    promise.fail(function(data) { console.log("DATA", data); });

    promise.done(function(data) { dispatch(key, data); });
  }

  var Api = function(apiUrl, key) {
    this.get = function(params) { return ajaxCall('GET', apiUrl, params, key); }

    this.post = function(params) { return ajaxCall('POST', apiUrl, params, key); }

    this.update = function(params) { return ajaxCall('PUT', apiUrl, params, key); }

    this.destroy = function() { return ajaxCall('DELETE', apiUrl, null, key); }
  };

  return Api;
});
