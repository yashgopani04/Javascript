const form = document.querySelector('form');

form.addEventListener('submit' , (e) => {

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height == '' || height < 0 || isNaN(height)) {
    
        results.innerHTML = `Please give a valid hight ${height}`;

    }

    if (weight == '' || weight < 0 || isNaN(weight)){

        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let message = '';

    if (bmi < 18.6) {
        message = `${bmi} Underweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = `${bmi} Normal weight`;
    } else if (bmi > 24.9) {
        message = `${bmi} Overweight`;
    } else {
        message = `${bmi} Try again`;
    }

    results.innerHTML = `<span>${message}</span>`;


})