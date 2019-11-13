// let maxOfTwo = (num1, num2) => {
//     return num1>num2? num1 : num2;
// }



const client = {
    name: 'a',
    age: 3,
    gender: 'F'
};

let showString = obj => {
    for(let key in obj) {
        if(typeof( obj['key']) === 'string'){
            console.log(key , obj['key']);
        }
    }
}

showString(client);
// let max2 = maxOfTwo(10,21);
// console.log(max2);