const BASE_URL = 'http://localhost:3000/api/v1';
const DRINKS_URL = `${BASE_URL}/drinks`;



document.addEventListener('DOMContentLoaded', function () {

    getDrinks();

    // hide create form on page load, show on click
    const createForm = document.querySelector('#form-container');
    createForm.addEventListener('submit', function (e) {
        e.preventDefault();
        createFormHandler(e);
    });


    const createButton = document.querySelector('#create-form-button');
    createButton.addEventListener('click', function (e) {
        e.preventDefault();
        createForm.style.display = 'block';
        createButton.style.display = 'none';

    });

    function createFormHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const drink = {
            name: formData.get('name'),
            description: formData.get('description'),
            image: formData.get('image')
        };
        fetch(DRINKS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(drink)
        })
            .then(response => response.json())
            .then(drink => {
                let newDrink = new Drink(drink, drink.attributes);
                document.querySelector('#drinks-container').innerHTML += newDrink.renderDrink();
            });
    };
        
            

    function getDrinks() {
        fetch(DRINKS_URL)
            .then(response => response.json())
            .then(drinks => {
                drinks.data.forEach(drink => {
                    console.log(drinks);
                    let newDrink = new Drink(drink, drink.attributes);
                    document.querySelector('#drinks-container').innerHTML += newDrink.renderDrink();
                });
            });
    } });


                

