const myUser = {

    username : "yashgopani04",
    userId : 4526,
    IssignedIn : true,

    userPrivatedata : function(){


                                    // this to extreact current contex 
        console.log(`My user id :- ${this.userId} is very confiditonal`);

    }

}

console.log(myUser);
console.log(myUser.userPrivatedata());


function User(username, userId, userEmail){

    this.username = username;
    this.userId = userId;
    this.userEmail = userEmail

    this.getAlldetails = function(){

        console.log(`My usename is ${this.username}`);
    }

    return this

}

// this called using constructor method
const userOne = new User('yashgopani', 456, 'yashgopani04@gmail.com') // use new keyword otherwise it overwrite another oobjects

console.log(userOne.getAlldetails());