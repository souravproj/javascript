// Sorting an Array
// The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [1, 3, 24, 34, 4];
const afterSort = fruits.sort();
const afterSortnum = numbers.sort();
console.log("afterSort", afterSort)
console.log("afterSortnum", afterSortnum)
console.log(fruits.reverse())

//JavaScript Array toSorted() Method
//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


const Newfruits = ["Banana", "Orange", "Apple", "Mango", "lol", "Rajesh"];
console.log(Newfruits.toSorted())
console.log("Newfruits", Newfruits)
console.log(Newfruits.sort())
console.log("Newfruits", Newfruits)

// JavaScript Array toReversed() Method
// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log("reversed", reversed)
console.log("months", months)
