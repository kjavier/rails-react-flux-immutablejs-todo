modulejs.define('immutableRenderMixin', ['shallowEqualImmutable'], function(shallowEqualImmutable) {
  return {
    shouldComponentUpdate: function(nextProps, nextState) {
      return !shallowEqualImmutable(this.props, nextProps) ||!shallowEqualImmutable(this.state, nextState);
    }
  };
});
