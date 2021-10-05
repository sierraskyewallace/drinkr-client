

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
    
    function createFormHandler(e) {
        const name = document.querySelector('#drink-name').value;
        const description = document.querySelector('#drink-description').value;
        // grab ingredient input values
        const ingredients = document.querySelectorAll('#ingredient-input');
        const ingredientArray = [];
        for (let i = 0; i < ingredients.length; i++) {
            ingredientArray.push(ingredients[i].value);
        }
        
        


        const instructions = document.querySelector('#drink-instructions').value;
        const image_url = document.querySelector('#drink-image-url').value;
        postDrink(name, description, ingredients, instructions, image_url);
    }

    function postDrink(name, description, ingredients, instructions, image_url) {
        const drinkData = { name, description, ingredients, instructions, image_url };
        fetch('http://localhost:3000/api/v1/drinks', {
            // POST request
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(drinkData)
        })
            .then(response => response.json())
            .then(drink => {
                console.log(drink);
                const drinkData = drink.data
                // render JSON response
                let newDrink = new Drink(drink, drinkData.attributes)
                document.querySelector('#drinks-container').innerHTML += newDrink.renderDrink()
            })
    }





        



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


                

