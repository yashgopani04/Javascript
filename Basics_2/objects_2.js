// const myappUser = {

//     user1 : {


//         user1Id : 74586,

//         userfullName : {

//             fName : "Yash",
//             lName : "Gopani"


//         }

//     }


// }

// console.log(myappUser)


let myName = "Yash"

console.log(myName);


let allIds = {

        fpersonId : "4523",
        spersonId : "5826"

}

let namesP = {

    fpersonName : "Yash",
    spersnName : "Gopani"
}

let idStore = Object.assign({}, allIds, namesP)

console.log(idStore);