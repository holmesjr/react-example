
const numbers = [1,2,3,4,5,6,7,8,9,10];

const newNumbers = numbers.map((number)=>{ return number * number });
const numbersOverFive = numbers.filter((number)=>{ return number > 5 });
console.log(newNumbers);
console.log(numbersOverFive);