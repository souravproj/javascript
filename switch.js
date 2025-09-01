let expression = 1;

switch (expression) {
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")

        break;
    case 3:
        console.log("3")

        break;
    case 5:
        console.log("4")

        break;
    case 4:
        console.log("5")

        break;
    case 7:
        console.log("6")

        break;
    case 8:
        console.log("7")

        break;
    case 9:
        console.log("8")

        break;
    default:
        console.log("this is default")
}



let ifCond = 3;

if (ifCond > 3) {
    console.log("you are great")
} else if (ifCond < 3) {
    console.log("you are good")
} else if (ifCond >= 3) {
    console.log("jio")
}


let currentDay;
let today = new Date().getDay();
console.log("today", today);
switch (today) {
    case 0:
        currentDay = "Sunday";
        break;
    case 1:
        currentDay = "Monday";
        break;
    case 2:
        currentDay = "Tuesday";
        break;
    case 3:
        currentDay = "Wednesday";
        break;
    case 4:
        currentDay = "Thurshday";
        break;
    case 5:
        currentDay = "Friday";
        break;
    case 6:
        currentDay = "Saturday";
        break;
    default:
        currentDay = "Enter a valid input";
}

console.log("currentDay", currentDay)