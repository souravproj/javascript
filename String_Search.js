const MainString = "Rajesh is a good boy";

// JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

let index = MainString.toLowerCase().indexOf("R");
console.log("index", index)
//lastIndexOf() help us to find to last index number of a letter 
const LastIndexOfALetter = MainString.lastIndexOf("o");
console.log("LastIndexOfALetter", LastIndexOfALetter)


const myName = "Sourav Kundu"
console.log(myName.indexOf("u"))
console.log(myName.lastIndexOf("u"))

// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

const SearchString = MainString.search("boy");
console.log("SearchString", SearchString)

// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

const MatchString = MainString.match("is");
console.log("MatchString", MatchString)

// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.

// Otherwise it returns false.
let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("welcome"));
console.log(text2.startsWith("Hello"));
console.log(text2.endsWith("universe."));

let testingText = "rajesh is a good girl";
console.log(testingText.includes("girl"))
console.log(testingText.startsWith("rajesh"))
console.log(testingText.endsWith('girl'))

// JavaScript Template Strings

let timeForLearning = 8

let templeteString = "Rajesh is learning Templete String from " + timeForLearning + "am"
console.log("templeteString", templeteString)

let usingTempleteLiteral = `Rajesh is learning Templete String from ${timeForLearning}am`;
console.log("usingTempleteLiteral", usingTempleteLiteral)


const mainName = "Rajesh";
const Title = "Das";

const fullName = `${mainName} ${Title}`;
console.log("fullName", fullName)














