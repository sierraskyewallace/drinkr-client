class Drink {
    constructor(drink, drinkAttributes) {
    this.id = drink.id
    this.name = drinkAttributes.name
    this.image_url = drinkAttributes.image_url
    this.instructions = drinkAttributes.instructions
    // included ingredients in a list
        this.ingredients = drinkAttributes.ingredients
    
  }
    
    renderDrink() {
        return `
        <br><br>
       <div class="row row-cols-1 row-cols-md-2"style="margin: 3em;">
        <div class="col-md-4">
        <div class="card text-center text-white bg-dark mb-10 w-60 h-35">
          <img src=${this.image_url} class="card-img-top"height="200" width="50"alt="...">
          <div class="card-body">
            <h3 class="card-title">${this.name}</h3>
            <h5 class="card-title">${this.description}</h5>
            <p class="card-text">${this.instructions}</p>
            <ul>
                <!--- ingredients nested -->
                ${this.ingredients.map(ingredient => `<li>${ingredient.name}</li>`).join('')}
            </ul>
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