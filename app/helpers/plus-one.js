import Ember from 'ember';

export function plusOne(index/*, hash*/) {
  var newIndex = parseInt(index)
  return newIndex+1;
}

export default Ember.Helper.helper(plusOne);
