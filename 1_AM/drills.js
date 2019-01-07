const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};
tokenize("hello i am diego")

const reverse = str => {
  // TODO - write a function which reverses the string
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
};
//reverse("hello")

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  const newArr = [];
  for (let key in arr ){
      if (!newArr.includes(key)){
        newArr.push(key)
      }
  }
  return newArr;
};
const arr = [1,2,3,4,4,5];
console.log(uniqueOnes(arr))

// const factorial = num => {
//   // TODO - write a function which returns the factorial of a positive integer
//   // let final = num; 
//   // function(num){
//   //   if(num > 0){
//   //     return num --;
//   //   }
//   //   return nu
//   // }
// };

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:
//assert(tokenize("Hello I am Diego") == ["Hello", "I", "am", "Diego"])\
assert(reverse("hello") === "olleh")
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert (reverse("3df") === "fd3")
