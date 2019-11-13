function Bird() {
    let weight = 15; // this variable can be accessed only by getWeight function
    this.getWeight = () => {
      return weight;
    };
 }
 
 let ducky = new Bird();
 ducky.getWeight();
 