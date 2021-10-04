

document.addEventListener('DOMContentLoaded', function () {

    getDrinks();
    getIngredients();
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
    
    // create drink form handeler with option to choose ingredients or add new ingredients
    
       


        



    function getIngredients() {
        fetch("http://localhost:3000/api/v1/ingredients")
            .then(response => response.json())
            .then(ingredients => {
                ingredients.data.forEach(function (ingredient) {
                    console.log(ingredients);
                    let newIngredient = new Ingredient(ingredient, ingredient.attributes);
                    document.querySelector('#ingredients-container').innerHTML += newIngredient.renderIngredients();
                });
            });
    }


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


                

