class Drink {
    constructor(drink, drinkAttributes) {
    this.id = drink.id
    this.name = drinkAttributes.name
    this.image_url = drinkAttributes.image_url
    this.instructions = drinkAttributes.instructions
    this.ingredients = drinkAttributes.ingredients
    this.liqour = drinkAttributes.liqour
    Drink.all.push(this)
    
  }
    
    renderDrink() {
        return `
        <br><br>
        <div class="col-md-4"style="margin: 2em">
        <div class="card text-center text-white bg-dark">
          <img src=${this.image_url} class="card-img-top"height="220" width="50"alt="...">
          <div class="card-body">
            <h3 class="card-title">${this.name}</h3>
            <h6 class="card-title">${this.liqour.name}</h6>
            Ingredients |
            <ul>
                
                
                ${this.ingredients}
            </ul>
            <br><br>
            <p class="card-text">Instructions</p>
            <p class="card-text"> ${this.instructions}</p>
            
          </div>
        </div>
      </div>
        </div>

      <br><br>
    `
    }
    
}

Drink.all = [];