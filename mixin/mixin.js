let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  //Mixin which can be used by unrelated objects. i.e, bird and boat
  let glideMixin = (obj) => {
    obj.glide = () => {
      console.log('Gliding!!!!!!');
    }
   }
  
   glideMixin(bird);
   glideMixin(boat);