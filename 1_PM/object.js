// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (let key in obj){
    if(typeof(obj[key]) === "object"){
      //console.log(obj[key])
      hasFalsyValue(obj[key])
    }
    else if(obj[key] === false){
      console.log("hi")
      return true;
    }
  }
  return false;
};

const test = {
  name: "diego",
  bool: false,
  user: {
    dog: false,
  }
  
}
// console.log(obj)
// console.log(obj.user)
//console.log(typeof(test.user))
console.log(hasFalsyValue(test));