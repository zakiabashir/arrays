#! /usr/bin/env node
// today topic is:
// arrays and its p[roperties
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
// fruit.splice(2,0,"lichi");
// fruit.splice(4,1,"peach");
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
fruit.splice(1, 2, "peach", "lichi");
console.log(fruit);
export {};
