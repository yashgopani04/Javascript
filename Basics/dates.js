let date = new Date()

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

console.log(typeof date);

// in date if you declared with this statement intial months stat from 0 - Jan 

let mydate = new Date(2024, 5, 25)

console.log(mydate.toDateString());

let mydate1 = new Date("02-25-2024")

console.log(mydate1.toLocaleString());