let bollywoodMovies = ["Singham", "Dhoom", "Fighter", "Krrish"]

let hollywoodMovies = ["Meg2", "Reacher", "Avengers", "Spidermen"]

// by merging two arrays doing with push() is not technically correct syntex

// bollywoodMovies.push(hollywoodMovies)

// console.log(bollywoodMovies.length);
// console.log(bollywoodMovies);


// use concat() to merge two arrrays

// let movies = bollywoodMovies.concat(hollywoodMovies)


// console.log(movies.length);
// console.log(movies);

// sprading two array by [...name1 , ...name2], normally use this syntex

let movies = [...bollywoodMovies , ...hollywoodMovies]

console.log(movies);

// concept of flat() which use to make a single array, if there is sub-arrys inside arrays

let scores = [45, 85, 96, [45, 96, 85, [85, 63, 52]]]
console.log(scores);

let allScore = scores.flat(Infinity)

console.log(allScore);

// to find or ask somethig in arrays use isArray()

console.log(Array.isArray("Yash"));

// to make a instant array from any string or datatypes use from(addname)

console.log(Array.from("Gopani"));

/* if you make a arra from given objects values it returns empty array because we also specifiy 
   that we have to make array for values like Yash or keys like Name

*/
console.log(Array.from({name : "Yash"}));

// use to() to create a array from multiple variables 

let teamA = "Mumbai"
let teamB = "Delhi"
let teamC = "Gujarat"


console.log(Array.of(teamA, teamB, teamC));