export default function() {
  this.namespace = '/api';

  this.get('/entities', function() {
    return {
      data: [{
        type: 'entities',
        id: 1,
        attributes: {
          name: 'Product',
          fields: [ 'name', 'brand', 'size', 'group']
        }
      }, {
        type: 'entities',
        id: 2,
        attributes: {
          name: 'Transaction',
          fields: [ 'product name', 'date', 'units']
        }
      }, {
        type: 'entities',
        id: 3,
        attributes: {
          name: 'User',
          fields: [ 'email', 'name']
        }
      }, {
        type: 'entities',
        id: 4,
        attributes: {
          name: 'Place',
          fields: [ 'adress', 'name', 'owner']
        }
      }]
    };
  });
  this.post('/reports', function() {
    return {
      data: [{
        type: 'reports',
        id: 1,
        attributes: {
          type: 'User',
          name: 'first',
          fields: [ 'name', 'brand', 'size', 'group']
        }
      }]
    };
  });
}
