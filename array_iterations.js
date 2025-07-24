//array iteration by foreach
// /The forEach() method calls a function (a callback function) once for each array element. 

const numbers = [45, 4, 9, 16, 25];
let x = 0;
numbers.forEach((element, index) => {
    console.log(`${element} is present in ${index} index`)
    x = x + element;
})

console.log("summation of all array element is", x)

//map function
numbers.map((element, index) => {
    console.log(`${element} is present in ${index} index`)
    x = x + element;
})

console.log(x)

// array filter method
//after filteration filter will resturn an array
//"==" will help us to match the values
//"===" help us to match the values with its data type

const numbersForFilter = [1, 2, 3, 4, 5, 6];
const filterForEven = (number) => {
    return number % 2 === 0;
}
console.log(numbersForFilter.filter(filterForEven))

//array reduce method

const numbersRajesh = [45, 4, 9, 16, 25, 90];
const totalNumbers = (accumulator, currentValue) => {
    console.log("accumulator", accumulator)
    console.log("currentValue", currentValue)
    return accumulator + currentValue;
}
const reduceMethod = numbersRajesh.reduce(totalNumbers)
console.log("reduceMethod", reduceMethod)







