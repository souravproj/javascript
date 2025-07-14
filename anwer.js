//1.Declare two variables :-
let a = 10;
let b = 3;
const result = a / b;
console.log("result", result);

//2.writte a javascript program to find the remainder :-
let aa = 15;
let bb = 4;
const remainderAnswer = aa % bb;
console.log("remainderAnswer", remainderAnswer);

//3.use the ++ and -- poerators to increase and decrease:-
let x = 5;
console.log(++x);
let xx = 5;
console.log(--xx);

//4. write an expressions that evaluate to true using comparison operators :-
let Raj = 5 > 2;
console.log(Raj);
let Rajesh = 1 < 4;
console.log(Rajesh);
let ron = 10 == 10;
console.log(ron);
let roni = "raj" === "raj";
console.log(ron);

//5. Create a program that adds three numbers and finds their average:-
let ram = 5;
let shyam = 10;
let jadu = 15;
const allplush = ram + shyam + jadu;
console.log(allplush);

//6. Declear a variable called user name and assign your name to it:-
const userName = "Rajes Das";
console.log("userName", userName);

//7. what is the difference between let, const, and  var?:-

//8. Reassign a variable declared with let and try to reassign a const variable. What happens?:-
let avi = 10;
avi = 20;
console.log(avi);
const anu = 30;
// anu = 30;
// console.log(anu);
//9.  Declare a variable without assigning any value. What is its type?:-
let o;
console.log(typeof o);

//10.Concatenate two strings: "Hello" and "World" with a space between.:-
const ayus = "Hello";
const ani = "World";
const testConcat = ayus.concat(" ", ani);
console.log(testConcat);

//11.Find the length of the string "JavaScript".:-
const FindJs = "Javascript";
console.log(FindJs.length);

//12.Convert "hello world" to uppercase and "JAVASCRIPT" to lowercase.:-
let ConvertUppercase = "Hello World";
console.log(ConvertUppercase.toUpperCase());
console.log(ConvertUppercase.toLocaleLowerCase());

//13. Extract the word "Script" from the string "JavaScript" using string methods.:-
let java = "Javascript";
let res = java.slice(4);
console.log(res);

//14.Declare an array with 5 numbers. Print the first and last element.:-
let AA = ["1", "2", "3", "4", "5"];
console.log(AA[0]);
console.log(AA.length);

//15.Add a new number to the end of the array using .push() and remove the first element using .shift().
const KK = [10, 20, 30, 40];
KK.push(60);
console.log(KK);
const LL = [10, 20, 30, 40, 50, 60];
LL.shift(0);
console.log(LL);

//using if else
const alu = 11;
if (alu % 2 == 0) {
  console.log("evenNumber");
} else {
  console.log("oddNumber");
}

// create a function //
const cheackLargeNumber = (a, b) => {
  if (a > b) {
    console.log(`${a} is leargest Number`);
  } else if (a == b) {
    console.log("both are similer");
  } else {
    console.log(`${b} is largest Number`);
  }
};
cheackLargeNumber(50, 25);

const anil = "john has";
const anil2 = 5;
const anil3 = "apple";
console.log(`${anil} ${anil2} ${anil3}`);

let hh = [3, 1, 4, 1, 5];
console.log("hh", hh.sort());

let RS = ["a", "b", "c"];
RS.map((value) => {
  console.log(value);
});
