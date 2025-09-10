//The for loop is used when the number of iterations is known.
// It consists of an initialization (exp1), a condition (exp2), and an increment expression (exp3).
// for (exp1; exp2; exp3) {
//   // code block to be executed
// }
// exp1 is executed one time before the execution of the code block.
// exp2 defines the condition for executing the code block.
// exp3 is executed every time a code block has been executed.

let i = 0;
for (i; i < 5; i++) {
    console.log("Number", i);
}

let j = 50;
for (j; j > 0; j--) {
    console.log("Number", j);
}

let countedArray = [];

const rajesh = (n, m) => {
    if (n > m) {
        return "n is greater than m"
    }
    for (n; n <= m; n++) {
        console.log(n);
        countedArray.push(n)
    }
}

const result = rajesh(1, 100);
console.log("result", result)
console.log("countedArray", countedArray)
console.log("countedArray", countedArray.length)

// while loop
// The while loop executes a block of code as long as a specified condition evaluates to true.
// while (condition) {
//   // code block to be executed
// }

let k = 50;
while (k <= 10) {
    console.log("current value of k is", k);
    k++;
}


// The do...while Loop
// The do...while loop is similar to the while loop, but guarantees that the code block will be executed at least once, before the condition is checked.

do {
    console.log("This is do while loop ", k);
    k++;
} while (k < 20)

//The for...in Loop
// The for...in loop iterates over the enumerable properties of an object.
// It is typically used for iterating over object keys.
// for (key in object) {
//   // code block to be executed
// }
const User = {
    name: "rajesh",
    title: "Das",
    age: 25
}

for (let x in User) {
    console.log(x + ":", User[x])
}

//User[x]
//User[name]
//user.name

//for of Loop
let numbers = [8, 5, 9, 10, 23];
let x = 0;
for (let y of numbers) {
    console.log(y);
    x = x + y;
}

console.log("sum of arr", x)


//break 

const arr = ["rajesh", "ganesh", "sujoy", "sourav"];
const findedKey = "sourav";
for (let y of arr) {
    console.log(y);
    if (findedKey === y) break;
    console.log(y);
}