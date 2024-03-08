const myPromisone =  new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log('Async Task is complete');

        // to connect with then it take as

        resolve()


    }, 2000)

})

// How to consumed promises 
// this type because we store promis into varaible

myPromisone.then(function (){

    console.log('Promis is Consumed');
})

// one more type is

new Promise(function(resolve, reject){

    setTimeout(function(){

    console.log('Async Task two');
    resolve();

    }, 2000)

}).then(function(){

    console.log('A second Promis also consumed');
})


const promisthree = new Promise(function(resolve, reject0){

    setTimeout(function(){

        // We can pass the pass the key and values of objects like that in resolve 
        resolve({username : 'yashgopani' , usermail : 'yashgopani04@gmail.com'})

    },2000)

})

// we can call that objects by connecting through then() just like that

promisthree.then(function(user){

    console.log(user);

})

const promiseFour = new Promise(function(resolve , reject){

    setTimeout(function(){

    let error = false

    if(!error){

        resolve({username : 'yashgopani' , usermail : 'yashgopani04@gmail.com'})

    } else{

        reject('Error : Something went wrong with your code')
    }

    },2000)

})

promiseFour
.then(function(user){

    console.log(user.username);

}) // it's called chaining in JS, so we can asscess through like that, 
.then(function(username){

    console.log(username);

})
.catch(function(er){

    console.log(er);

    // finall() works as a by defalut, so whetever happens with code but it will prints at the end
}).finally(function(){

    console.log('The promise might be completed or rejected');
})

// with aync function

const promiseFive = new Promise(function(resolve , reject){

    setTimeout(function(){

        let error = true
    
        if(!error){
    
            resolve({username : 'gopaniyash04' , usermail : 'yash0401@gmail.com'})
    
        } else{
    
            reject('Error : Something went wrong with your code')
        }
    
        },2000)

})

// one problem with async, is it can not control error as much as catch can so we have to use try and catch

async function consumepromiseFive(){

    try {

    const response = await promiseFive
    console.log(response);
        
    } catch (error) {

        console.log(error); // it hold the error which you set in reject()
        
    }   
}
consumepromiseFive()

// let's try to catch data from api using fetch()

async function getallUsers(){

    try {

        const userData = await fetch('https://jsonplaceholder.typicode.com/users')
        const myUsers = await userData.json() // because there needs some time for converting all into objects
        console.log(myUsers);
        
    } catch (error) {

        console.log('Error' ,error);
        
    }

}
getallUsers()

// same fatching api data using then and catch

fetch('https://jsonplaceholder.typicode.com/users')

.then(function(userData){

    return userData.json()
})
.then( (allUser) => {

    console.log(allUser);

} )
.catch(function(er){

    console.log(error);
})