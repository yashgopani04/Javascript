const allbtn = document.querySelectorAll(".button")

const body = document.querySelector("body")

allbtn.forEach( (btn) => {

btn.addEventListener('click' , (e) => {

    console.log(e.target);

     if (e.target.id === 'grey') {

        body.style.backgroundColor = e.target.id;
        
   }

    if (e.target.id === 'cadetblue') {

       body.style.backgroundColor = e.target.id;
        
    }

    if (e.target.id === 'blue') {

        body.style.backgroundColor = e.target.id;
        
   }

   if (e.target.id === 'yellow') {

    body.style.backgroundColor = e.target.id;
    
}

 })

} )

