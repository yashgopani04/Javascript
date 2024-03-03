const user1 = 0

if (user1) {
    
        console.log(`welcome`);
}
else
{
    console.log(`goodbuy`);
}


// falsey values are false, 0, -0, BIgInt On, "", null, undefined, NaN

/* truthy values "0", " ", "false" // whatever we write in staring is considerd as truthy

    empty array [], empty object {}, function(){}

*/

// How to chack the array is ampty or not

const user2 = []

if (user2.length == 0) {
    
        console.log(`Empty array`);
}
else
{
    console.log(`goodbuy`);
}

// to chack for Object

const number1 = {}

if (Object.keys(number1).length == 0) {

    console.log(`Empty Object`);
}
else{

    console.log(`There is values`);
}

// Nullish Coalescing Operator (??) 

let val1;

// use ?? to being safe side when you get Null and undefined value

val1 = null ?? 20

console.log(val1);

// Terinary Operator short form of if else statement

// condition ? true statement : false statment

let score = 900

score <= 600 ? console.log(`well played`) : console.log(`Better luck next time`);