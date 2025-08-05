//JavaScript has a built-in object called Date that lets you work with dates and times (like current date, time, birthdays, deadlines, etc.)


//real time with current date
const date = new Date();
console.log("date", date)

//Specific Date
//Format: "YYYY-MM-DD"
const birthDay = new Date("2001-10-31")// 31-10-2001
console.log("birthDay", birthDay)

// Specific date include time
// Formet:- "YYYY-MM-DDTHH:MM:SS"

// const customDate = new Date(2025, 11.25, 10, 30, 0)
const customDate = new Date()
console.log("customDate", customDate)

const FullYear = customDate.getFullYear()
console.log("FullYear", FullYear)

//Returns month (0-11)
const Month = customDate.getMonth();
console.log("Month", Month + 1)

const CustomDate = customDate.getDate()
console.log("CustomDate", CustomDate)


//day=[0-6]
//sun=0 mon=1 tue=2 wed=3 thus=4 fri=5 Sat=6

const Day = customDate.getDay();
console.log("Day", Day)

const hours = customDate.getHours()
console.log("hours", hours)

const mins = customDate.getMinutes()
console.log("hours", mins)

const sec = customDate.getSeconds()
console.log("hours", sec)

console.log(date)
//convert the whole date into string
//transfering the date formet to String formet
const ConvertDateToString = date.toString()
console.log("ConvertDateToString", ConvertDateToString)

//take only the Day from date
const ConvertDateToDateString = date.toDateString()
console.log("ConvertDateToDateString", ConvertDateToDateString)

//take only the time from date
const ConvertDateToTimeString = date.toTimeString()
console.log("ConvertDateToTimeString", ConvertDateToTimeString)

//covert the date into MongoDB understable formet
const ConvertDateToISOString = date.toISOString()
console.log("ConvertDateToISOString", ConvertDateToISOString)

// to understand the date into your own formet
const ConvertDateToLocalString = date.toLocaleString()
console.log("ConvertDateToLocalString", ConvertDateToLocalString)

// usage of operators inside dates

const d1 = new Date("2025-03-21");
console.log(d1)
console.log(d1.getTime())
const d2 = new Date("2025-10-31");
console.log(d2)
console.log(d2.getTime())

const isTwoDatesAreSame = d1.getTime() === d2.getTime();
console.log("isTwoDatesAreSame", isTwoDatesAreSame)
const isD1GreaterThanD2 = d1 > d2
console.log("isD1GreaterThanD2", isD1GreaterThanD2)
const isD2GreaterThanD1 = d2 > d1
console.log("isD2GreaterThanD1", isD2GreaterThanD1)
const differentinMillisec = d2 - d1
console.log("differentinMillisec", differentinMillisec)


// difference in between two dates
// 1min=1000ms
// 60sec=1min
// 60min=1hour
// 1day=24hours
const convertThisMilliSecIntoDays = differentinMillisec / (1000 * 60 * 60 * 24)
console.log("convertThisMilliSecIntoDays", convertThisMilliSecIntoDays)

