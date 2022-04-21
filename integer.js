
Integer.js
const arr=[17,52,94,60]
x=arr.every(isInt);
function isInt(value){
 return Number.isInteger(value);
}
y=isInt('ABCD');
console.log('ABCD');
console.log(y);
console.log(arr);
console.log(x);