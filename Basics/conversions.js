let score = "123ABC"
let scoreDetails = null

// for undefined variable, prunt also shows NAN after conversion it into Number
// For boolen it shows 1 for true and 0 for false


console.log(typeof score);
console.log(typeof scoreDetails);



let actualNumber = Number(score)
let actualDetails = Number(scoreDetails)

console.log(typeof actualNumber);
console.log(typeof actualDetails);

console.log(actualNumber);

console.log(actualDetails);


let boolenNum = "";

let conversionBoolean = Boolean(boolenNum);

console.log(conversionBoolean);

// for conversion of boolean 1=> true, string => true but empty string gives value => false.


let idNumber = 25647

console.log(typeof idNumber);

let enrollmentId = String(idNumber);

console.log(enrollmentId);

console.log(typeof enrollmentId);


// Symbol() use to make uniqeness among two differnet variable, means if the values are same, that not means they are same variables


const id = Symbol("256")

const id2 = Symbol("256")

console.log(id === id2);

// typeof function returns fuction value

const myFunction = function(){

    console.log("Hello World");
}

console.log(typeof myFunction);