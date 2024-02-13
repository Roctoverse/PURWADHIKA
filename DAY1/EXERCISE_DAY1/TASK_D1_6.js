// Example 1

let days = 400
let year = Math.floor(days / 365)
let daysYearLeft = days % 365
let month = Math.floor(daysYearLeft / 30)
let daysMonthLeft = daysYearLeft % 30

console.log(`${year} year, ${month} month, ${daysMonthLeft} days`)


// Example 2

let days1 = 366
let year1 = Math.floor(days1 / 365)
let daysYearLeft1 = days1 % 365
let month1 = Math.floor(daysYearLeft1 / 30)
let daysMonthLeft1 = daysYearLeft1 % 30

console.log(`${year1} year, ${month1} month, ${daysMonthLeft1} days`)