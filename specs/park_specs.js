var assert = require('assert');
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js');

describe('Park', function () {

});

it('enclosure should start empty', function () {
  const park = new Park();
  const actual = park.enclosure.length;
  assert.strictEqual(0, actual);
}) ;

it('should be able to add dinosaur', function () {
  const dino = new Dinosaur('T-Rex', 4);
  const park = new Park();
  park.addDinosaurToEnclosure(dino);
  const actual = park.enclosure[0];
  assert.strictEqual(dino, actual);
});
