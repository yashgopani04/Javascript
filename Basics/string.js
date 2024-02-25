const firstName = "Yash"

const lastName = "Gopani"

// New and up to date method to combine two string

console.log(`My first name is ${firstName} and my last name is ${lastName}`);


const fullName = "YashGopani"

console.log(fullName.length);
console.log(fullName.charAt(4));
console.log(fullName.indexOf('o'));


const newString = fullName.substring(2 , 7)

console.log(newString);

const newString1 = fullName.slice(5 , 9)

console.log(newString1);

// trim use for remove extra whitespaces 

const fullEmail = "    yashgopani04@gmail.com   "

console.log(fullEmail);

console.log(fullEmail.trim());

// to replace something in strings replace()

const friendName = "Harshit Virani"

console.log(friendName);

console.log(friendName.replace('Virani' , 'Isamliya'));

// to chack the char or word in string use includes()

console.log(friendName.includes('yash'));

// to split from any char or word use split()

const url = "http://www.google.com/youtube/yash-gopani04/channel"

console.log(url.split('/'));