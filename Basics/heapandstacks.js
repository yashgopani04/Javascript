/* Heap (Premitive) such as int, string, boolean etc 
    
   Stack (non-premitive) like array, object, functions.

*/

// Stacks method

let myName = "Yash"

let myFname = myName

myFname = "Gopani"

console.log(myName);

console.log(myFname);


// Heap method

let myfullName = {

   firstName : "Yash" ,
   lastName : "Gopani"

}

let myfriendName = myfullName

myfriendName.lastName = "Isamaliya"

console.log(myfullName.lastName);
console.log(myfriendName.lastName);