//Function in Javascript
/*
Functions -> its job is to reduce redundancy in our code
*/
function sum(a,b){
    s = a+b;
    console.log(s);
}
sum(2,8);

function $um(a,b){
    return(a+b);
}
let val=$um(10,2);
console.log(val);

//Arrow Function
const arrowSum = (a,b) =>{
    return(a+b);
}

arrowSum(18,2);

//forEach loop in Arrays

/*
Callback is a function that can be passed as an argument to another function 
*/
/*
arr.forEach(callBackFunction) -> forEach is a higher order function because it take another function as paramter and can also return another function.
*/

let numbers =[1,2,3,4,5,6];
numbers.forEach((num) => {
    console.log(num**2);
});








/*let arr =["u","z","a","i","f","a"];
let i;
for (i =0;i<6;i++){
    console.log(`i = ${arr[i]}`);
} 
console.log(arr[i],i);

const obj = { a: 1, b: { c: 2 } };
const { a, b: { c: d },} = obj;
console.log(a,d);*/
let a=8 ;
let b = 9;
[a,b] =[b,a];
console.log(a,b);