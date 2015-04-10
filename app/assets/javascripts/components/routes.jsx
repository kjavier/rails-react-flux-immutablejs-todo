modulejs.define('routes', ['reactRouter', 'todoList'], function(Router, TodoList) {
  var Route = Router.Route;

  var routes = (
    <Route handler={TodoList} path='/'>
      <Route name='todos' handler={TodoList} />
    </Route>
  );

  return routes;
});
