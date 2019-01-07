// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => typeof(el) === 'number' && el % 7 === 0;
    

Array.prototype.filter = function(fun) {
  const newArr = [];
  console.log(newArr)
  for (let element of this){
    if (fun(element)){
      newArr.push(element)
    }
  }
  console.log(newArr)
  return newArr;
};


const newArr = arr.filter(multOf7);

console.log(newArr);
