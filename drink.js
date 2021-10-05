class Drink {
    constructor(drink, drinkAttributes) {
    this.id = drink.id
    this.name = drinkAttributes.name
    this.image_url = drinkAttributes.image_url
    this.instructions = drinkAttributes.instructions
    this.ingredients = drinkAttributes.ingredients
    Drink.all.push(this)
    
  }
    
    renderDrink() {
        return `
        <br><br>
        <div class="col-md-4"style="margin: 2em">
        <div class="card text-center text-white bg-dark">
          <img src=${this.image_url} class="card-img-top"height="200" width="50"alt="...">
          <div class="card-body">
            <h3 class="card-title">${this.name}</h3>
            <h5 class="card-title">${this.liqour.name}</h5>
            <ul>
                <!--- ingredients nested -->
                ${this.ingredients.map(ingredient => `<li>${ingredient.name}</li>`).join('')}
            </ul>
            <p class="card-text">Instructions: ${this.instructions}</p>
            <div class="d-flex justify-content-center">
              <div class="btn-group">
              <button class="btn btn-light">
               <i class="fas fa-pen"></i></button>
               <button class="btn btn-light"><i class="fas fa-trash"></i></button>
               </div>
            </div>
          </div>
        </div>
      </div>
        </div>

      <br><br>
    `
    }
    
}

Drink.all = [];