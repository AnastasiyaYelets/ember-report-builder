import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type','fields'],
  name: null,
  type: Ember.computed('newReport.type', function(){
    return this.get('newReport.type')
  }),
  newReport: null,
  fields: Ember.computed('newReport.fields.[]', function() {
    return this.get('newReport.fields');
  }),
  reports: [],
  isEntityShow: Ember.computed('newReport.type', function(){
    return !!this.get('newReport.type');
  }),
  remainingFields: Ember.computed('newReport.fields.[]','newReport.type','model', function() {
    var fields = this.get('newReport.fields');
    if (!!this.get('newReport.type')) {
      let remainingFields
      this.get('model').forEach((item) => {
        if ( this.get('newReport.type') === item.get('name')) {
          remainingFields = item.get('fields');
        }
      });
    if (!Ember.isEmpty(this.get('newReport.fields.[]'))) {
      fields.forEach((itemField)=>{
          remainingFields.removeObject(itemField)
      })
    }
      return remainingFields
    } else {
      return []
    }
  }),
  isAddButtonShow: Ember.computed('remainingFields', function() {
    return !Ember.isEmpty(this.get('remainingFields'));
  }),
  isFieldsShow: Ember.computed('newReport.fields.[]', function() {
    return !Ember.isEmpty(this.get('newReport').get('fields'));
  }),
  isNewFieldShow: false,
  isReportShow: false,

  actions: {

    addFieldButtonClick() {
      this.set('isNewFieldShow', true);
    },
    selectField(field) {
      this.get('newReport').get('fields').addObject(field);
      this.set('isNewFieldShow', false);
      this.set('isFieldsShow', true);
    },
    saveReport() {
      var newReport = this.get('newReport')
      this.get('reports').pushObject(newReport);
      this.set('newReport', this.store.createRecord('report', { fields: [] }));
      this.setProperties({
        name: '',
        type: null,
        fields: [],
        isReportShow: true
      });
    }
  }
});
