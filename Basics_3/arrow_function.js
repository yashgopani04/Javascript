const user1 ={

    username : "Yash",
    userId : 7485,

    // this return the current context

    welcome : function(){

       console.log(`${this.username} , Welcome to your Profile`);
        // console.log(this);
    }
}

user1.welcome()

user1.username = "Harshit"

console.log(user1);

// console.log(this);

// arrow function
// we can not use this function to access the value of function

const newUser = (num1, num2) =>{

    return num1 + num2

}

console.log(newUser(5,9));

// one more type
//if you use () not require for return keyword but {} require 

const user2 = (num1, num2) => (num1 + num2)

console.log(user2(2,3));

const user3 = (num1,num2) => ({username : "Yash"}) // write like this ({key : values}) to reteun the object


console.log(user3(8,3));