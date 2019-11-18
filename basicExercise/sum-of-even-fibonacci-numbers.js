
 function fiboEvenSum(n) {
    let first = 1;
    let second = 2;
    let sum = 2;
    let fibNum; // declaring and initializing variables
    if (n <= 1) return sum; // edge case
    for (let i = 3; i <= n; i++) {
      // looping till n
      fibNum = first + second; // getting the ith fibonacci number
      first = second;
      second = fibNum;
      if (fibNum % 2 == 0) sum += fibNum; // If even add to the sum variable
    }
    return sum;
  }
  
  fiboEvenSum(10);
  