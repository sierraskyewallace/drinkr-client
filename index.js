

document.addEventListener('DOMContentLoaded', function () {

    getDrinks();
    getLiqours();
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

        // liqours
        const ingredients = document.querySelector('#drink-ingredients').value;
        const instructions = document.querySelector('#drink-instructions').value;
        const image_url = document.querySelector('#drink-image-url').value;
        postDrink(name, liqours, ingredients, instructions, image_url);
    }

    function postDrink(name, liqours, ingredients, instructions, image_url) {
        const drinkData = { name, liqours, ingredients, instructions, image_url };
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





        



    function getLiqours() {
        fetch("http://localhost:3000/api/v1/liqours")
            .then(response => response.json())
            .then(liqours => {
                liqours.data.forEach(function (liqour) {
                    console.log(liqours);
                    let newLiqour = new Liqour(liqour, liqours.attributes);
                    document.querySelector('#liqours-container').innerHTML += newLiqour.renderLiqour();
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


                

