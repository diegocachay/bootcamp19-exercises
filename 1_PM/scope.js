// Part 1:
//  - What will print and why?
"1 because the value being printed is equal to 1"
"2 because the value of a is 2"
"undefined because the value of a is not defined"
//  - What will change if we delete line 5? Why?
"undefined changes to 1 because it doesn't redfine the value of a "
// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

const x = () => {
  let a = 2;
  console.log(a);
}
const y = () =>{
  let a = 2;
  console.log(a);
  x();
}

var a = 1;
console.log(a);
y();
