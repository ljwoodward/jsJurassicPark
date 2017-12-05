var assert = require('assert');
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js');

describe('Park', function () {

});

    const park = new Park();
    const dino1 = new Dinosaur('T-Rex', 4);
    const dino2 = new Dinosaur('T-Rex', 3);
    const dino3 = new Dinosaur('Pterodactyl', 8);
    park.addDinosaurToEnclosure(dino1);
    park.addDinosaurToEnclosure(dino2);
    park.addDinosaurToEnclosure(dino3);


it('enclosure should start empty', function () {
  const newPark = new Park();
  const actual = newPark.enclosure.length;
  assert.strictEqual(0, actual);
}) ;

it('should be able to add dinosaur', function () {
  const newDino = new Dinosaur('Diplodocus', 3);
  park.addDinosaurToEnclosure(newDino);
  const actual = park.enclosure[0];
  assert.strictEqual(newDino, actual);
});

it('should be able to remove all dinosaurs of a particular type', function () {
  park.removeAllOfType('T-Rex');
  const actual = park.enclosure.length;
  assert.strictEqual(1, actual);
});
