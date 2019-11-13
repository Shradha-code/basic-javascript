const fizzBuzz = value => {
    if (typeof value !== 'number')
      return 'Not a Numer';
    if(value%3 === 0 && value%5 === 0 ) {
        return 'FIZZ-BUZZ';
    } 
    if(value%5 === 0) {
        return 'BUZZ';
    } 
    if(value%3 === 0 ) {
        return 'FIZZ';
    } 
        return value;
}

const resultFizz = fizzBuzz(9);
console.log(resultFizz);
const resultBuzz = fizzBuzz(10);
console.log(resultBuzz);
const resultFizzBuzz = fizzBuzz(15);
console.log(resultFizzBuzz);
const result = fizzBuzz(8);
console.log(result);
const notNumber = fizzBuzz(true);
console.log(notNumber);