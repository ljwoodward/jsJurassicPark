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
};




module.exports = Park;
