// Array is a collection of data
// Array index always starts with 0
// Array length always start with 1

let arr = ["a", "b", "c", "d", "e"];
let arrNum = [12, 14, 25, 46, 20];
console.log(arr[0]);
console.log(arrNum[3]);

//Example of arrays
const cars = ["Saab", "Volvo", "BMW"];
const emptyArray = []; // blank array
console.log("emptyArray", emptyArray);
emptyArray[0] = 19;
console.log("after adding one data inside emptyArray", emptyArray);
emptyArray[1] = 20;
console.log("after adding next data", emptyArray);
emptyArray[4] = 40;
console.log("emptyArray", emptyArray);
emptyArray[3] = 25;
console.log("emptyArray", emptyArray);
emptyArray[2] = 30;
console.log("emptyArray", emptyArray);
emptyArray[100] = "Rajesh";
console.log("emptyArray", emptyArray);

//You access an array element by referring to the index number:
const rajesh = cars[0];
console.log("rajesh", rajesh);

//convert an array to string
// wheather we are converting an array to a string in that time we will use toString() method

console.log(typeof cars);
const ArrayToString = cars.toString();
console.log("ArrayToString", ArrayToString);
console.log(typeof ArrayToString);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 46,
};

// Total number of index and length count

const arrayLengthh = cars.length;
console.log("arrayLength", arrayLengthh);
console.log("Array number of index", arrayLengthh - 1);
//////////
////////////////
/////////////////
/////////////////

// Total number of index and length count

const arrayLength = cars.length;
console.log("arrayLength", arrayLength);
console.log("Array number of index", arrayLength - 1);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log("fruit", fruit);

//add "Mahindra inside cars"
cars.push("Mahindra");
console.log("cars", cars);
console.log("find index", cars.indexOf("Mango"));
console.log("find index", cars.indexOf("Mahindra"));

cars[cars.length] = "Das";
console.log("cars", cars);
fruits[6] = "Lemon";
console.log("fruits", fruits);
fruits[5] = "Rajesh";
console.log("fruits", fruits);
console.log(typeof fruits);

//length
fruits.length = 2;
console.log(fruits);

const fruitsStr = ["Banana", "Orange", "Apple", "Mango"];
//toString()
let CovertArrayIntoString = fruitsStr.toString();
console.log(CovertArrayIntoString);
//at()
console.log(fruitsStr.at(2));
//join method
console.log(fruitsStr.join("-"));

const newArray = ["Banana", "Orange", "Apple", "Mango"];
//pop method(deletion)
newArray.pop();
console.log(newArray);
//push method(addition)
newArray.push("Mango");
console.log(newArray);
//shift() method
newArray.shift();
console.log(newArray);
//unshift()
newArray.unshift("Lemon");
console.log(newArray);
//delete()
delete newArray[0];
console.log(newArray);
//concatination
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log("myChildren", myChildren);

const arr1 = ["Emil", "Tobias", "Linus"];
const CmyChildren = arr1.concat("Peter");
console.log(CmyChildren);

//copyWithin()


// The copyWithin() method copies array elements to another position in an array

const Cfruits = ["Banana", "Orange", "Apple", "Mango", "rajesh", "das"];
// Cfruits.copyWithin(1, 0);
// console.log("fruits",Cfruits)

//slice method
const afterSlice = Cfruits.slice(5);
console.log("afterSlice", afterSlice);
const SelectafterSlice = Cfruits.slice(1, 3);
console.log("SelectafterSlice", SelectafterSlice);