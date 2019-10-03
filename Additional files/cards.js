
const forecast = {
  today: {min: 72, max: 83},
  tomorrow: {min: 65, max: 79}
}

function getMaxtmrw(temp){
  const {tomorrow : {max : maxOfTomorrow}} = forecast;
  //set variable maxOfTomorrow to the max inside of tomorrow
  return maxOfTomorrow
}

let [y, r, , o] = [1, 2, 3, 4]
console.log(y, r, o)


//let variable getA equal to a function
//takes in (these parameters)
// returns => this value
//when not using argument, use ()
let mult = (n, z) => n*z;

let source = [1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list){
  let [ , , ...arr] = list;
  return arr;
}
console.log(removeFirstTwo(source))
console.log(source)


console.log(mult(6,6))

console.log(getMaxtmrw(forecast))




//console.log(magic("1","2"))
//console.log(magic2("1","2"))
//console.log(arrayConcat(array1, array2))
