modulejs.define('todoShow', ['react', 'immutableRenderMixin'], function(React, ImmutableRenderMixin) {
  var view = React.createClass({
    displayName: 'TodoShow',

    mixins: [ImmutableRenderMixin],

    render: function() {
      return (
        React.createElement("a", {href: "javascript:;", className: "list-group-item"}, 
          this.props.model.get('name')
        )
      );
    }
  });

  return view;
});
