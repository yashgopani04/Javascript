// we can add as many as instade objects and access it with "."

const myappUser = {

    user1 : {


    userfullName : {

            fName : "Yash",
            lName : "Gopani"


        }

    }


}

// console.log(myappUser.user1.userfullName)

// to merge to objects use assign() syntex

const gamerA = {1 : "Sdf41", 2 : "Dfeg415"}
const gamerB = {3 : "Sdf85", 4 : "Dfeg489"}
const gamerC = {5 : "Sdf98", 6 : "Dfeg474"}

// for better understanding and readability use {} as a target

// const totalGammer = Object.assign({}, gamerA, gamerB, gamerC)

// by using spread method{...name1, ...name2}

const totalGammer = {...gamerA, ...gamerB, ...gamerC}

console.log(totalGammer);

// you can also make objects in arrays normally use in database


const myDatabase = [

    {
        userFname : "Yash",
        userLname : "Gopani"


    },
    {
        

    },
    {


    }

]

// to access array object 

// myDatabase[0].userLname

const newUser = {

    id : 8569,
    Email : "yashgopani04@gmail.com"


}

// to make every keys into a single array 

console.log(Object.keys(newUser));

// to make every values into a single array

console.log(Object.values(newUser));

// to describe every keys and values in indvidual array

console.log(Object.entries(newUser));
