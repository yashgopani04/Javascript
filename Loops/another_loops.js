const value = [45, 85, 96, 85, 96]

for (const num of value) {
    
        // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {

    if (greetings === " ") {
        
        break;          

    }
    // console.log(greet);
        
}

// concept of map it holds uniqe values

const myMap = new Map()

myMap.set('IN' , 'India')
myMap.set('IN' , 'India') // not holds repeted values 
myMap.set('FR' , 'France')
myMap.set('UK' , 'London')

// add for of loop on map

for (const [keys, values] /* if you want to print both seprately do like that*/of myMap) {
    
    // console.log(keys, ':-' , values); // by doing this you may print all values of map


}

// for of loop not works on objects 

// for object best is for in loop

let myObj1 = {

    Fname : "Yash",
    LName : "Gopani",
    Id : "17SE02IT016"

}

for (const key in myObj1) {
    

    console.log(`${key} shows myself ${myObj1[key]}`); /* by doing this you can only extract key from objects but adding
                                objcname[keys] you can extract object values from objects
                                */
}

// for array same

let myArray = [78, 96, 52, 63, 'Yash']

for (const key in myArray) {
   
    // console.log(`index of array is ${key} and their values is ${myArray[key]}`);
}


// conecpt of forEach loop, bassically use on array and objects in arrays


// car.forEach( function (items) { // don't need to add function name store all values in items(anyName) 

//     console.log(items);

// } )

// also happens with arrow function 


// car.forEach( (items, index, arr) => {
    
    //     console.log(items, index, arr); // we can take all index, and full array also
    // })
    
    
    // multiple objects in array
    
    const cars = [

        {

            Brand : 'BMW',
            Model : 'BM502',
            Color : 'RED'

        },

        {
            
            Brand : 'Audi',
            Model : 'A6',
            Color : 'Black'
        }


]

cars.forEach( (items) => {

    console.log(`Brand ${items.Brand} : Model :- ${items.Model} : Color :- ${items.Color}`);

} )
    