// concept of Globle scope

let number1 = 4857

const number3 = 968

if(true){

    // This is called block scope 

    let number1 = 96352

    const number2 = 47152

    // This is called Golbal scope

    // console.log(number3);
    
}

// This is called Golbal scope

// console.log(number1);

// In Function

function profil1(){

    const username = "yashgopani04"

    function progileEmail(){

        const Email = "yashgopani04@gmail.com"

        //we can use all Perent class values as a we ara child but Perent can not use this propaties

        console.log(`I am Profile 1, My username is ${username} and my Email id is ${Email}`);

    }
//    console.log(Email); 
   progileEmail()

}
profil1()


if(true){

    username = "yashgopani"

    if(username === "yashgopani"){

        const userId = 44521

        console.log(`My usrename ${username} and usrId ${userId}`);
    }
    // console.log(userId);

}
// console.log(username);


// concept of Hoisting

console.log(fun1(5));

function fun1(num){

    return num + 1
}

// another type to declare a function //in variable bassically

// but in this type of function you can not access it before intilization fnction

//'funData' before initialization give a error

// console.log(funData(5));

const funData = function(num){

    return num + 2

}

// we can access it from hear

console.log(funData(5));



