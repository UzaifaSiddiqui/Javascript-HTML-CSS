// STRINGS IN JAVA
let n = "Uzaifa Siddiqui";
console.log("n.length = ",n.length);

//slicing in string
console.log(n[0]);
console.log(n.slice(0,));

// template literals and string interpolation are same thing

console.log(`My Name is ${n}`);

/* escape character
->new line character
->tab character
*/ 

//STRING BUILT-in FUNCTION
//->string in javascript are immutable

console.log(n.toUpperCase());

console.log(n.toLowerCase());

let str =" L o W E r";
console.log(str.trim());//->to remove whitespace

let rep="methodology";
console.log(rep.replace("o","u"));
//->to replace first same character
console.log(rep.replaceAll("o","u"));//-> to replace every same character from a string

//Practice Question for Strings

let userName = prompt("Enter Your Full Name :");
console.log(`@${userName+userName.length}`);
console.log(typeof(userName.length));

/* Learning Arrays
-> Almost same as python
 */

//-> for initialization of array
 let arr=[1,2,34,"uzaifa"];
 console.log(arr);

//Methods in Arrays

//PUSH Method ->adds at the end of an array
 console.log(arr.push("siddiqui"));

//POP method ->remove last element from an array

arr.pop();

//toString ->to make a string copy of an array 

Array.toString();

// Concatination -> join two arrays and return

let marvel =["iron-man","thor","spider-man"];
let dc = ["superman","batman","wonder-woman"];

//->let heroes =marvel.concat(dc);
console.log(marvel.concat(dc));

//unshift method to add an element at the start of an array

marvel.unshift("ant-man");
console.log(marvel);

//shift method to delete an element from start of an array

console.log(dc);
dc.shift();
console.log(dc);

/*Slice() method in array
->same as python
array.slice(index,index);
*/

//splice method to change an element in an array

//splice(add,remove,replace)-> splice(startind,delcount,newElement);

let list =[1,2,3,4,56,7];

list.splice();

//slice practice Question

let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
//console.log(companies.splice(0,1),companies);

console.log(companies.splice(2,1,"ola","shola"),companies);

console.log(companies.splice(companies.length-1,"amazon"));