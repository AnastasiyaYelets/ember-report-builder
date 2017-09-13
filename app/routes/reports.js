import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    type: {
      refreshModel: true
    },
    fields: {
      refreshModel: true
    }
  },
  model(params) {
     return Ember.RSVP.hash({
       type: params.type,
       fields: params.fields || [],
       model: this.get('store').findAll('entity')
     })
   },

   setupController(controller, hash) {
     controller.setProperties({
       type: hash.type,
       model: hash.model,
       newReport: this.store.createRecord('report', { fields: [], type: hash.type })
    })
   }
});
