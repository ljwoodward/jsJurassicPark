const Park = function () {
  this.enclosure = [];
   this.addDinosaurToEnclosure = function (dinosaur) {
      this.enclosure.push(dinosaur);
   };
};




module.exports = Park;
