const RajeshNewFunction = (x, y) => {
    console.log("Calling RajeshNewFunction")
    return x + y
}

const result = RajeshNewFunction(10, 15);
console.log("result", result)


const newArr = ["rajesh", "sonali", "rupali"];

const findIndecOfAnElement = (x) => {
    // const output = newArr.findIndex((y) => {
    //     return y === x
    // })
    // return output

    return newArr.findIndex((y) => y === x)
}

const indexOfResult = findIndecOfAnElement("rupali");
console.log("indexOfResult", indexOfResult)