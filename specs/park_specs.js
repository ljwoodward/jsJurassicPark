var assert = require('assert');
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js');

describe('Park', function () {

});

    const park = new Park();
    const dino1 = new Dinosaur('T-Rex', 4);
    const dino2 = new Dinosaur('T-Rex', 3);
    const dino3 = new Dinosaur('Pterodactyl', 8);


it('enclosure should start empty', function () {
  const actual = park.enclosure.length;
  assert.strictEqual(0, actual);
}) ;

it('should be able to add dinosaur', function () {

  park.addDinosaurToEnclosure(dino1);
  const actual = park.enclosure[0];
  assert.strictEqual(dino1, actual);
});

it('should be able to remove all dinosaurs of a particular type', function () {

})
