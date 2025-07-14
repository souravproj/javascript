//String

let RRajesh = "Das";
let SSourav = 'Kundu'

const typeOfRajesh = typeof (Rajesh);
const typeOfSourav = typeof (Sourav);
console.log(typeOfRajesh)
console.log(typeOfSourav)

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
let text = `He is 3 ${typeOfRajesh} ${Sourav} often called "Johnny"`; // this is backtic whatever you will write inside this backtic, will convert automatically to string

//why we are using $?
// untill you use $ symbol, any veriables dynamic value will not come inside backtic. or will not be treated as variable.



console.log("text", text)
console.log(typeof (text))


//calculate length of a string

var RajeshText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var totalLength = RajeshText.length;
console.log("totalLength", totalLength)


let Normaltext = "We are the so-called, \"Vikings\" ,from the north.";
//if we wanna to write a string inside a string , in that time we have to use the escape character.
console.log("Normaltext", Normaltext)


//Basic String Methods

const Webdev = "Learning Javascript";

const lenthOfString = Webdev.length;
console.log("lenthOfString", lenthOfString)

const UpperCaseOFString = Webdev.toUpperCase();
const LowerCaseOFString = Webdev.toLowerCase();
console.log(UpperCaseOFString, LowerCaseOFString)

// charAt()==> charAt help us to get a chracter from a specified index
//index always start from 0
// length=index+1;
//index=length-1;

const chracterOfAspecifiedIndex = Webdev.charAt(18);
console.log("chracterOfAspecifiedIndex", chracterOfAspecifiedIndex)

//charCodeAt()==> this method help us to get a particular code number of a single character
const characterCodeOfASpecifiedCharacter = Webdev.charCodeAt(2);
console.log(characterCodeOfASpecifiedCharacter)

// concat() joins two or more strings:
const test1 = "Rajesh is a good Boy";
const test2 = "who is my friend"

const RajeshCon = test1.concat(" ", test2, " ", test1);
console.log(RajeshCon)

//doing concatination normally
const NormalConcat = test1 + " " + test2;
console.log("NormalConcat", NormalConcat)

// The trim() method removes whitespace from both sides of a string:\
//trim will help us to remove spaces before starting a text

const spaceWithname = "                   Rajesh Das         "
console.log("Before trim", spaceWithname)

const AfterTrim = spaceWithname.trim();
console.log("AfterTrim", AfterTrim)

const removeSpacefromStart = spaceWithname.trimStart();
console.log("removeSpacefromStart", removeSpacefromStart)

const RemoveSpaceFromLast = spaceWithname.trimEnd();
console.log("RemoveSpaceFromLast", RemoveSpaceFromLast)


// The padStart() method pads a string from the start
// It pads a string with another string (multiple times) until it reaches a given length.

// 9=>09 // 9/5/25=>09/05/25  -------> Example of PadStart()

let CalenderDate = "8545";
const ApplyPadStartOnDate = CalenderDate.padStart(5, "x");
console.log("ApplyPadStartOnDate", ApplyPadStartOnDate)

const applyPadOnEnd = CalenderDate.padEnd(5, "0");
console.log(applyPadOnEnd)

//convert number into String after that added pad
const numberOfClass = 9; // have to convert on 09
console.log(typeof (numberOfClass))
const ConvertToString = numberOfClass.toString();
console.log(typeof (ConvertToString))
//add pad on first
const addingPad = ConvertToString.padStart(2, "0");
console.log("addingPad", addingPad)

//add pad on last
const addingPadOnLast = ConvertToString.padEnd(2, "0");
console.log("addingPadOnLast", addingPadOnLast)


// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

const repeatString = "Hello World"
const newlyCreatedText = repeatString.repeat(2);
console.log(newlyCreatedText)


// The replace() method replaces a specified value with another value in a string:

const Hello = "You are a good boy boy boy boy boy boy boy boy boy";
const ReplacedHello = Hello.replace("boy", "girl");
console.log("ReplacedHello", ReplacedHello)

const ReplaceAllHello = Hello.replaceAll("boy", "girl");
console.log("ReplaceAllHello", ReplaceAllHello)

// A string can be converted to an array with the split() method:
//Split will help to change a string to array

const Alphabet = "a,b,c,d,e,f"
const AfterSplitingOfAlphabet = Alphabet.split(",");
console.log(AfterSplitingOfAlphabet)
const FirstIndexData = AfterSplitingOfAlphabet[0]
console.log(FirstIndexData)

let arr = [1, 2, 3, 4]
console.log(arr.length)//actual how much data present
console.log(arr[2])//index=length - 1

