// Count Digits in a Number (Using Loop)

const countDigits = (number) => {
    let count = 0;
    console.log("Number", number)
    while (number > 0) {
        for (let i = number; i >= 1; i = i / 10) {
            console.log(i)
            count++;
            console.log("for", count)
        }
        return count;
    }
    return "Enter a valid number";
}

console.log(countDigits(-2342343))