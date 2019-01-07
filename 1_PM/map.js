// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = (el) => {
  el * 3;
};

Array.prototype.map = function(fun) {
  const newArr = [];
  for (let element of this){
    newArr.push(3*element)
  }
  return newArr;
};

console.log(arr.map(triple));
