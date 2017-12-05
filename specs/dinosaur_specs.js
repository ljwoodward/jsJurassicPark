var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {

});

// it('should be empty at start', function () {
// 	var bottle = new WaterBottle();
// 	assert.strictEqual(bottle.volume, 0);
// });

var dino = new Dinosaur('Stegosaurus', 5);


it('should have a type', function () {
  const actual = dino.type;
  assert.strictEqual('Stegosaurus', actual);
});

it('should have a number of offspring', function () {
  const actual = dino.offspring;
  assert.strictEqual(5, actual);
});
