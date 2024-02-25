const myData =  Symbol("D5628")

const myObj = {

    Fname : "Yash",
    Lname : "Gopani",
    // because of that we use 2nd type to access the objects
    "fullName" : "Yash Gopani",
    Id : 5263,

    //to access Symbol() values
    [myData] : "D5896482",
    mNumber : "+491635140288",
    nikName : ["Prise", "iaskjk"]

}

// 1> type to access of objects and their values

console.log(myObj.nikName);

// 2> type to access of objects and normaly use and better use type

console.log(myObj["Lname"]);
console.log(myObj["Id"]);
console.log(myObj["fullName"]);

// to access symbol value from object
console.log(myObj[myData])


// to change values in objects

myObj.Id = 85412

// to freeze the value of objects after that ou can not overwrite objec's value

// Object.freeze(myObj)
myObj.Lname = "Isamliya"

console.log(myObj["Lname"]);

console.log(myObj);

// function

myObj.greetings = function(){

    console.log(`My name First Name is ${this.Fname}`);
    console.log(`My name Last Name is ${this.Lname}`);
    console.log(`My Full name is ${this.fullName}`);
    console.log(`My id is  ${this.Id}`);


}

// to access function you must put () after funvtion name functionname()

console.log(myObj.greetings());
