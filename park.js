var Dinosaur = require('./dinosaur.js');

const Park = function () {
  this.enclosure = [];
   this.addDinosaurToEnclosure = function (dinosaur) {
      this.enclosure.unshift(dinosaur);
   };
   this.removeAllOfType = function(type) {
     for (var i = 0; i < this.enclosure.length; i++) {
       if (this.enclosure[i].type == type) {
         this.enclosure.splice(1, i);
         this.removeAllOfType(type);
       }
     }
   };
   this.getFecundDinos = function() {
     const fecundMap = [];
     for (var i = 0; i < this.enclosure.length; i++) {
       if (this.enclosure[i].offspring >= 2) {
         fecundMap.push(new Dinosaur(this.enclosure[i]))
       }
     }
     return fecundMap;
   };
};




module.exports = Park;
