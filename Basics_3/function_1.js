function myData(fName, lname){

console.log(`My Full name is ${fName} ${lname}`);

return 

}

// you have to store function in another variable for print 

let myFullname = myData("Yash" , "Gopani")

console.log(myFullname);

function myProfile(myFullname){

    if(myFullname === undefined){

        console.log(`Plesae enter your full Name`);

    }
    else
    {

    return `${myFullname} Just here!`

    }

}

const showProfile = myProfile()

console.log(showProfile);