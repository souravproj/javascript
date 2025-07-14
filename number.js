let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

// B => Bracket
// O => operator
// D => Division
// M => Multiplication
// A => Addition
// S => Substraction

let equation = 1 + (2 + 5) - (29 - 7)
console.log("equation", equation)


//concatination in between number and string
let m = "10";
let n = 20;
let z = n + m;
console.log("z", z)

let w = 10;
let e = 20;
let r = "The result is: " + (w + e);
console.log(r)

let xc = 10;
let yc = 20;
let zc = "The result is: " + xc + yc;
console.log("zc", zc)

let xa = "100e";
let ya = "10";
let za = xa / ya;
console.log(za)
console.log(typeof (za))

// convert to string from number

let myNumber = 32;
console.log(typeof (myNumber));
let newStringValue = myNumber.toString();
console.log(typeof (newStringValue));

// datatype
const value = "999";
const numValue = 999;
console.log(value === numValue)


//NAN ==> Not a number

let NotaNum = 100 / "Apple";
console.log(NotaNum)
console.log(typeof (NotaNum));

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

let divisor = "sourav"

let xyce = 12 + 20 + 25 / divisor
console.log("xyce", xyce)
let IsNanCheck = isNaN(xyce);
console.log("IsNanCheck", IsNanCheck)
if (IsNanCheck) {
    console.log("its not a number")
} else {
    console.log("its a number")
}

let myNorNumber = 2;
let txt = "";

while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    console.log(txt)
    txt = txt + myNumber;
}


let ram = "Sourav"
let Shyam = "Shyam"
let ganu = 29;

console.log(typeof (ram / ganu))
console.log(typeof (ganu / ram))
console.log(typeof (ram / Shyam))
console.log(typeof (ganu / ganu))

//toString() help us to convert number to string

let currentNumbar = 45;
console.log(typeof (currentNumbar))
console.log(currentNumbar.toString())
console.log(typeof (currentNumbar.toString()))