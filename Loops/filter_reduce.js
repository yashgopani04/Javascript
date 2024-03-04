const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // as forEach loop can not return the values that's why we use filter

  let userBooks = books.filter( (bk) => {return bk.genre === "Science" && bk.publish >= 2000} )

// console.log(userBooks);


let numArray = [1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10]

// it is called chainning method

 let storeNewnum = numArray.map( (num) =>  num * 10).map( (num) => num + 1).filter( (num) => num >= 20)

// console.log(storeNewnum);


 // reduce method to calculate or add items or count in arrys

 const priceCart = [
        {

            categories : "Mobile",
            Price : 12999

        },

        {

            categories : "Headphone",
            Price : 4599

        }

]

// reduce method use to coun total price in array

const totalPay = priceCart.reduce( (acc , items) => acc + items.Price ,0)

console.log(totalPay);