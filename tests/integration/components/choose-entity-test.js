import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('choose-entity', 'Integration | Component | choose entity', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{choose-entity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#choose-entity}}
      template block text
    {{/choose-entity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
