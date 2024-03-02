// concept of REST

// you can use REST for storeing values in single parameter of function as array use ...name

function myId(val1, val2, ...Id1){

    return Id1


}

// console.log(myId(100,500,600));
console.log(myId(401 , 5200 , 6330, 600));

// create a object name myRecoord

let myRecord = {

    FName : "Harshit",
    LName : "Isamliya",
    Id : 4512
}

// How we can access object in through function

function showData(frd1Obj){

    return `My first friend's First Name is ${frd1Obj.FName} and Last name is ${frd1Obj.LName} `
}

console.log(showData(myRecord));

// one more method to pass the object in functions

// function showData2(frd2Obj){

//     return `My first friend's First Name is ${frd2Obj.firstName} and Last name is ${frd2Obj.lastName} `
// }

// we can dirctly pass when we called function

// showData2({

//     firstName : "Jaydeep",
//     lastName : "Motka"
// })


// Now same for Array

const country = ["USA", "Germany"]

function accessArray(travelCountry){

    return `I want to travel ${travelCountry[0]}`
}

console.log(accessArray(country));

