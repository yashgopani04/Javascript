function userDetails(username){

    this.username = username

}

function includeUser1(username, email, password){

    userDetails.call(this ,username) //use call to extract values from another functions

    this.email = email
    this.password = password

}

const myUser1 = new includeUser1('yashgopani' , 'yashgopani04@gmail.com' , 4512)

console.log(myUser1);