// immediately invoked function expression (IIFE) 
//Groups related functionality into single object

// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };


//Groups above two functions into single object
let funModule = (function(){
    return {
      isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
          };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        }
      }
    }
  })();