const clickButton = () => {
    alert("ok");
};

//for var redeclaration and reassign possible
var x = 20;
var x = 10;

//for let redeclaration is not possible but value assign possible
let y = 30;
y = 40;

//for const redeclaration and value reassign is not possible
const w = 20;

console.log("W", w);
console.log("x = ", x);

//this is arrow function
const accecebility = () => {
    y = 50;
};

//this is normal function
function sourav() {
    console.log("test", test);
}

//operators

// Assignments operators
let a = 30;
let b = 20;
let m = 100;
let n = 100;

let c = a + b; //additional operator
let d = a * b; //multiplication operator
let e = a > b;
let substraction = a - b;
let division = a / b;
let modulas = a % b;
let increment = a++; // a=a+1  // a // a+1
let decrement = b--; // b=b-1  //b  //b-1

let specialIncrement = ++m; //a=a+1  //a+1
let specialdecrement = --n; //a=a-1  //a-1
console.log("specialIncrement", specialIncrement);
console.log("specialdecrement", specialdecrement);

console.log("c", c);
console.log("a", a);
console.log("b", b);
console.log("d", d);
console.log("e", e);
console.log("substraction", substraction);
console.log("division", division);
console.log("modulas", modulas);
console.log("increment", increment);
increment = a++;
console.log("increment", increment);
console.log("decrement", decrement);
decrement = b--;
console.log("decrement", decrement);
//exponential operator
let exponential = 12 ** 2;
console.log("exponential", exponential);
x = 10;
y = 2;
const outputOfPow = Math.pow(x, y); // this is pow function
console.log("outputOfPow", outputOfPow);
//ternary operator

const sandip = "rajesh";

const output =
    sandip == "rajesh" ? "yes, got correct output" : "no, we are sorry";
console.log("output", output);

//Data types

const Rajesh = "Rajesh";
console.log(typeof Rajesh);

const Number = 54679458674596754967596759486759046759406767675940675940675940;
console.log(typeof Number);

//boolean  always will have only two values either true or false

const DoYouKnow = false;
console.log(typeof DoYouKnow);

//Bigint
let xyzx = BigInt("123456789012345678901234567890");
console.log("x", typeof xyzx);

const number = 7.5;
console.log(typeof number);

function moto() {
    console.log("jio");
}

const newMoto = () => {
    console.log("new Moto");
};

moto();
newMoto();

//addition

const AdditionOfTwoNumber = (a, b) => {
    console.log("a", a);
    console.log("b", b);

    return a + b;
};

console.log(AdditionOfTwoNumber(10, 20));
console.log(AdditionOfTwoNumber(20, 20));
console.log(AdditionOfTwoNumber(30, 20));
console.log(AdditionOfTwoNumber(40, 20));

//substraction will be done by rajesh

//modulus
const modulasOfTwoNumber = (a, b) => {
    console.log("a", a);
    console.log("b", b);
    return a % b;
};

console.log(modulasOfTwoNumber(23, 10));

/// object

const car = {
    name: "Wagon R",
    weight: "850kg",
    color: "Red",
};

console.log(car.name);
console.log(car.weight);
console.log(car.color);


const local = {
    name: "Rajesh", //String
    age: 24, //number
    isMale: true //boolean
};


//array of object

// const arr = ["rajseh", "rajseh", "rajseh", "rajseh", "rajseh", "rajseh"]

// const Man = [
//     {
//         name: "rajesh",
//         title: "Das",
//     },
//     {
//         name: "Sourav",
//         title: "Kundu",
//     },
// ];

//filled-uping objects entities

const person = {};

person.Firstname = "Rajesh";
person.Lastname = "Das";
person.Age = 24;
person.Color = "Black";
person.Gender = "Male"


console.log("person", person)

//form==>form-filled-up==>submit==>payload:all-filled-up-data==>backend received the data ==>resonse-send 

ResponseData: {
    [
        {
            name: "Rajesh",
            title: "das"
        },
        {
            name: "Rajesh",
            title: "das"
        },
        {
            name: "Rajesh",
            title: "das"
        },
        {
            name: "Rajesh",
            title: "das"
        },
        {
            name: "Rajesh",
            title: "das"
        }
    ]
}

{/* <p>{ResponseData.name}</p> */ }

//delete one property from object
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
delete person2.age;

//adding a property inside object
person2.author = "Puspa"

console.log(person2)

// Nested Objects:-
//Property values in an object can be other objects:

myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
const AccessFord = myObj.myCars.car1;
console.log("AccessFord", AccessFord)

//adding a property inside myCars objectFit: 
myObj.myCars.rajesh = "Das"
console.log(myObj)

//deleting a property from object
delete myObj.myCars.rajesh;
console.log(myObj)

//Property value of and objects is a function

const Sourav = {
    name: "Rajesh",
    title: "Das",
    sumofTwoNumber: (a, b) => {
        return a + b;
    },
    totalName: () => {
        return Sourav.name + " " + Sourav.title //concatination
    }
}
console.log(Sourav.sumofTwoNumber)
const outputFunctionalObject = Sourav.sumofTwoNumber(4, 5)
console.log(outputFunctionalObject)
const FullName = Sourav.totalName();
console.log("FullName", FullName)

//how can i convert a string to uppercase

const name = 'rajesh';
const convertToUppercase = name.toUpperCase()
console.log(convertToUppercase);

//conver the string to lowercase
const lowerCase = convertToUppercase.toLowerCase();
console.log(lowerCase)


