import Ember from 'ember';

export default Ember.Component.extend({
  report: null,
  actions: {
    selectEntity(type) {
      this.get('report').setProperties({
        type: type,
      })
    }
  }
});
