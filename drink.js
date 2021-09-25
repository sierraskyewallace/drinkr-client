class Drink {
    constructor(drink, drinkAttributes) {
    this.id = drink.id
    this.name = drinkAttributes.name
    this.image_url = drinkAttributes.image_url
    this.instructions = drinkAttributes.instructions
    
  }
    
    renderDrink() {
        return `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <h5 class="card-title">${this.description}</h5>
            <p class="card-text">${this.instructions}</p>
            <ul>
                <li>${this.ingredients}</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    
}