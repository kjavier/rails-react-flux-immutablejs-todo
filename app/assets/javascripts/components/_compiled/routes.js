modulejs.define('routes', ['reactRouter', 'todoList'], function(Router, TodoList) {
  var Route = Router.Route;

  var routes = (
    React.createElement(Route, {handler: TodoList, path: "/"}, 
      React.createElement(Route, {name: "todos", handler: TodoList})
    )
  );

  return routes;
});
