// iffi stands for Immediately Invoked Function Expression (IIFE)

// use for to avoide Global Scopes Pollution and also it Immidialy executes 
// only add () before function starts

(function user1(){

    console.log(`DB Coonnected`);

})();
// put ; when you start another function as IIFE

// (Defination of Function)(to execute Function)

( (username) => {

    console.log(`DB Coonnected2 ${username}`);

})("yashgopani04")

// same like as funName("yashgopani04") here (function)(parameter)
