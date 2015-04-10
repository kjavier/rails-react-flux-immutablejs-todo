// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require ../../../vendor/assets/javascripts/modulejs.min
//= require ../../../vendor/assets/javascripts/react/react-with-addons-0.13.1
//= require ../../../vendor/assets/javascripts/react/ReactRouter.min
//= require ../../../vendor/assets/javascripts/react/shallow_equal_immutable
//= require ../../../vendor/assets/javascripts/react/immutable_render_mixin
//= require ../../../vendor/assets/javascripts/event_emitter.min
//= require ../../../vendor/assets/javascripts/immutable-3.7.1.min
//= require ../../../vendor/assets/javascripts/flux
//= require_tree .

modulejs.define('jquery', function () { return jQuery; });
modulejs.define('react', function () { return React; });
modulejs.define('reactRouter', function() { return ReactRouter; });
modulejs.define('eventEmitter', function() { return EventEmitter; });
modulejs.define('immutable', function() { return Immutable; });
modulejs.define('flux', function() { return Flux; });

$(function() {
  var Router = modulejs.require('reactRouter');
  var routes = modulejs.require('routes');

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    var view = React.createFactory(Handler);
    React.render(view(), $('#block-react')[0]);
  });
});
