import Ember from 'ember';

export default Ember.Component.extend({
  report:null,
  actions: {
    removeField(field) {
      this.get('report').get('fields').removeObject(field);
    },
  }
});
