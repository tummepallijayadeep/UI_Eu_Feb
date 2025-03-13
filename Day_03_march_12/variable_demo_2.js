var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a} b:${b} c:${c}`);

a = 15;
b = 25;
// c = 35; // TypeError: Assignment to constant variable
console.log(`a: ${a}  b: ${b}  c: ${c}`);

const students =['jay','dan'];
console.log(students);
students.push('ram');
console.log(students);

let user = {name: 'raj', add: 'vA'};
user.age = 25;
console.log(user);

