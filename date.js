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