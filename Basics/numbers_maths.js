const score = 400;

console.log(score);

// use to create a new keyword to specify my value is in number

const finalScore = new Number(5000)

console.log(finalScore);

// use toString() to convert number into string and then we can use proparties of strings

console.log(finalScore.toString().length);

// use toFixed number proparty to specified 2 fixed value after result

const avgScore = new Number(65482)

console.log(avgScore.toFixed(2));


const myprvScore = 452.526145
console.log(myprvScore.toPrecision(6));

// use toLocalString() to indicate values with coma, by specifying Ind language 

const yourScore = 854741256
console.log(yourScore.toLocaleString('en-IN'));


//++++++++++++++ maths +++++++++++++++++//

// return + values 
console.log(Math.abs(-4));

// return round values
console.log(Math.round(8.9845));

// give max round value
console.log(Math.ceil(8.3));
// give min round value
console.log(Math.floor(4.8));

console.log(Math.min(7, 9, 4, 2));
console.log(Math.max(7, 9, 4, 2));


// Math random method pass the rendom value

// multiply with 10 to shift one point in random value but to avaoid 0 as min also add +1 
console.log((Math.random() * 10) + 1);

const min = 10

const max = 20

// to return values betwn 10 and 20, and also avoid 0 because I add min values in this 

console.log(Math.floor(Math.random() * (max - min + 1) + min));