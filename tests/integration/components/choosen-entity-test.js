import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('choosen-entity', 'Integration | Component | choosen entity', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{choosen-entity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#choosen-entity}}
      template block text
    {{/choosen-entity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
