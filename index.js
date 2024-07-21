#! /usr/bin/env node
// today topic is:
// arrays and its properties
// 
let fruit = ["apple", "mango", "banana", "orange", "strawbarry", "lichi"];
// // push: ye array k end p  values ko add krta h
// fruit.push("lichi");
// console.log(fruit)
//     // pop: ye array k end p values ko remove krta h
// fruit.pop()
//     // unshift: first p values ko add krney kly use hoti h
//     fruit.unshift("graapes");
// // shift: shoro sy remove krta h
// fruit.shift();
// console.log(fruit);
// fruit[2] = "imli";
// console.log(fruit);
// slice: slice aik sy zyada indexes ko select krney kly use hota h
// 
// let slicearray = fruit.slice(3,5); //slice original array ko change nhi krta
// console.log(slicearray);
// console.log(fruit);
// //  splice: ye drmian sy remove krny kly use hota h
// fruit.splice(2,3);
// console.log(fruit);
// ye add krney kly bhi use hota h
// fruit.splice(2,0,"lichi"); //2 ka mtlb h 2 index sy phly lichi ko add kr do bananna ko remove kiy baghair , 
// fruit.splice(4,1,"peach");  // is ma 4th index remove ho k uski jagan peach add ho jy ga , 1 is used for removing
// console.log(fruit);
// // tuples:iska concept typescipt ma nhi h: ye srf typescript ma h:
// // ye srf specific krney kly use hota h such as: agr hum chty hn srf 2 fruits use hon to uskly hum tuples use krty hn
// let fruittuples:[string, string] = ["lichi", "peach"];
// fruittuples.push("grapes");
// console.log(fruittuples);
// fruit.splice(0,3,);
// console.log(fruit);
// fruit.splice(2,2,);
// fruit.pop();
// console.log(fruit);
// fruit.splice(2,1,"peach");
// fruit.splice(1,2,"peach","lichi"); // yhan p 1&2 index remove ho k unki jagan peach or lichi add ho jyn gy,//in this program 2 means  2 index del ho jyn gy
// console.log(fruit)
// let x = "100";
// let check = ("100$"===`${x}$`);
// console.log(check);
// let string = "hello world";
// console.log(typeof string.length);
// let arr:number[] = [1,2,3,4,5];
// arr.push(stop);
// console.log(10%3>1);
// ======= switch case =========
// let grade = await inquirer.prompt([{
//     name:"marks",
//     type:"number",
//     message: "please write here your obtain marks"
// }]);
// switch(true){
// case grade.marks>=80 && grade.marks<=100:
//     console.log(`your obtain marks is ${grade.marks}, congragulation: 'your grade is A'`);
//     break;
//     case grade.marks>=70 && grade.marks<=80:
//      console.log(`your obtain marks is ${grade.marks} "your grade is B"`);
//      break;
//      case grade.marks>=60 && grade.marks<70:
//         console.log(` your obtain marks is ${grade.marks} 'your grade is C'`);
//         break;
//         case grade.marks>=50 && grade.marks<=60:
//             console.log(`your obtain marks is ${grade.marks} 'your grade is D'`);
//             break;
//             default:
//                 console.log(`your obtain marks is ${grade.marks} "your grade is F"`)
// }
//============= functions:========///
// --- define function or simple function-----
function func() { } ///syntex 
function sum(a, b) {
    console.log(a + b);
}
sum(8, 9); //invokation of a function
// --- define function or simple function with return type-----
function name(name) {
    return name; //return ma console bahar krwaty hn
}
console.log(name('zakia')); ///direct console k under function ko rakh do ya phr phly variable ma declear krwa do phr console krwa do
let myname = name('zimal');
console.log(myname);
// ------- arrow funtion or lambda funtion -------
let egg = () => { }; //arrow function syntex
let eggfry = (egg, salt, oil) => {
    return egg + salt + oil;
};
let omelate = eggfry(1, 1.5, 1);
console.log(omelate);
// ------anonymous function --------
//
// let value = function(){} //syntex
// let val = function():void{
//     console.log('hye how are you?')
// }
// val()
// ------- immediately invoked function expressions -------
(function () {
    console.log('hye how are you?');
})();
export {};
