// for (let i = 0; i < 10; i++) {
//     const element = i;

//     console.log(`outerloop value ${element}`);

//     for (let j = 0; j < 10; j++) {
//         const element = j;

//         console.log(i  + '*' + j + '=' + i * j);
        
//         // console.log(`inner loop values ${j} and outroolp values ${i}`);
//     }
   
// }



// for (let i = 0; i < 10; i++){

//     let element = i

//     if (element == 5) {
        
//         console.log(`Detacted number 5`);

//        break

//    }   console.log(`value of i is ${element}`);
    
// }



for (let i = 0; i < 10; i++){

    let element = i

    if (element == 5) {
        
        console.log(`Detacted number 5`);

        continue

    }
    console.log(`value of i is ${element}`);
    
}