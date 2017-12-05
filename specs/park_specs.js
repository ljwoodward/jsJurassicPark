var assert = require('assert');
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js');

describe('Park', function () {

});






it('enclosure should start empty', function () {
  const newPark = new Park();
  const actual = newPark.enclosure.length;
  assert.strictEqual(0, actual);
}) ;

it('should be able to add dinosaur', function () {
  const newPark = new Park();
  const newDino = new Dinosaur('Diplodocus', 3);
  newPark.addDinosaurToEnclosure(newDino);
  const actual = newPark.enclosure[0];
  assert.strictEqual(newDino, actual);
});

it('should be able to remove all dinosaurs of a particular type', function () {
  const park = new Park();
  const dino1 = new Dinosaur('T-Rex', 1);
  const dino2 = new Dinosaur('T-Rex', 3);
  const dino3 = new Dinosaur('Pterodactyl', 8);
  park.addDinosaurToEnclosure(dino1);
  park.addDinosaurToEnclosure(dino2);
  park.addDinosaurToEnclosure(dino3);
  park.removeAllOfType('T-Rex');
  const actual = park.enclosure.length;
  assert.strictEqual(1, actual);
});

it('should get all the dinosaurs with an offspring count of more than 2', function() {
  const park = new Park();
  const dino1 = new Dinosaur('T-Rex', 1);
  const dino2 = new Dinosaur('T-Rex', 3);
  const dino3 = new Dinosaur('Pterodactyl', 8);
  park.addDinosaurToEnclosure(dino1);
  park.addDinosaurToEnclosure(dino2);
  park.addDinosaurToEnclosure(dino3);
  park.removeAllOfType('T-Rex');
  const actual = park.getFecundDinos().length;
  assert.strictEqual(1, actual);
});
