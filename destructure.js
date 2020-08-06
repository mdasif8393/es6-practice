const person = { name:"Asif", salary:12000, age:25};
const {name, salary} = person;

console.log(name,salary);

const nayok = ["Amir khan", "Salman Khan", "Sharuk khan", "Abul khan", "Sahib khan"];
const [first, second, ...rest] = nayok;
console.log(rest);