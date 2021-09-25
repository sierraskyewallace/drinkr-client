

document.addEventListener('DOMContentLoaded', function () {

    getDrinks();

    // hide create form on page load, show on click
    const createForm = document.querySelector('#form-container');
    createForm.style.display = 'none';
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
        

    
    function getDrinks() {
        fetch("http://localhost:3000/api/v1/drinks")
            .then(response => response.json())
            .then(drinks => {
                drinks.data.forEach(drink => {
                    console.log(drinks);
                    let newDrink = new Drink(drink, drink.attributes);
                    document.querySelector('#drinks-container').innerHTML += newDrink.renderDrink();
                });
            });
    } });


                

