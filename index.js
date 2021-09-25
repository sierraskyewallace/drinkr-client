const BASE_URL = 'https://localhost:3000';
const DRINKS_URL = `${BASE_URL}/drinks`;


document.addEventListener('DOMContentLoaded', function () {

    getDrinks();

    const createDrinkButton = document.querySelector('#create-form-button-container');
    createDrinkButton.addEventListener('click', function (e) {
        e.preventDefault();
        
    });


    const createDrinkForm = document.querySelector('#form-container').style.display = 'none';
    createDrinkForm.addEventListener('submit', function (event) {
        createDrinkFormHandler(event);
    });

    function getDrinks() {
        fetch(DRINKS_URL)
            .then(response => response.json())
            .then(drinks => {
                drinks.data.forEach(drink => {
                    let newDrink = new Drink(drink, drinkAtributes);
                    newDrink.renderDrink();
                });
            });

    }
})
