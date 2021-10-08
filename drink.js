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
        
        <div class="row row-cols-1 row-cols-md-2"style="margin: 3em;">
        <div class="col-md-4">
        <div class="card text-left text-white bg-dark mb-3 w-40 h-20">
        <img src=${this.image_url} class="card-img-top"height="220" width="50"alt="..."> <div class="card-body"> 
        <h3 class="card-title">${this.name}</h3> 
        <h6 class="card-title">Liqour | ${this.liqour.name}</h6>
        <br><br>
        Ingredients |
        <br><br>
        <p>${this.ingredients}</p>
        <br><br> <p class="card-text">Instructions |</p>
        <p class="card-text"> ${this.instructions}</p> 
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <br><br>;
        `
    }
    
}

Drink.all = [];