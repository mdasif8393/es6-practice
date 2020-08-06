const age1 = [18, 17, 23];
const age2 = [21, 23, 43];
const age3 = [34, 23, 42];

const allAge = [...age1, 100 ,  ...age2, ...age3];
console.log(allAge);

const numbers = [122, 322, 122, 435];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);