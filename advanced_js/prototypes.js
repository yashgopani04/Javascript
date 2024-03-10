function myUser(num){

    return num * 5
}

// basically everything at the end is objects in JS,
// here we can see, How I assigned the value to function same as a objects

myUser.electricity = 2

console.log(myUser(5));

console.log(myUser.electricity);

console.log(myUser.prototype);

function Menu(items, prices){

    this.items = items
    this.prices = prices

}

// The way we can create a prototypes

Menu.prototype.discount = function(){

    this.prices-=45

    console.log(`Your new prices for ${this.items} is ${this.prices}`); 
}

Menu.prototype.printMenu = function(){

    console.log(`Items :- ${this.items} and Prics :- ${this.prices}`);
}

const italiyan = new Menu('Pizza' , 450)
const indian = new Menu('rise', 120)

italiyan.printMenu()
italiyan.discount()


const myItaliyan = ['Margerita', 'Pasta' , 'Laziangia']


let myMenu = {

    italiyan : "Pizza",
    indian : "Punjabi",

    todaySpacial : function(){

        console.log(`today's spacial is ${this.italiyan}`);

    }
}

Object.prototype.Punjabi = function(){

    console.log(`today's spacial has ${myMenu.italiyan} and ${myMenu.indian}`);
}

myMenu.Punjabi() // objects access new prototypes

myItaliyan.Punjabi() // array access new prototypes

// You can set whatever prototypes to objcets and aftewards it will access by all, function, array, string


// for string

let myName = 'yashgopani       '

String.prototype.trueLength = function(){

   console.log(this);

   console.log(`True length of your name is: ${this.trim().length}`);

}

myName.trueLength()

"yashgopani".trueLength()

"gghjasjhjaskjaldklkadpo".trueLength()
