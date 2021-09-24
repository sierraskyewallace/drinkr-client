class Drink {
    constructor(drink, drinkAttributes) {
    this.id = drink.id;
    this.name = drinkAttributes.name;
    this.image_url = drinkAttributes.image_url;
    this.ingredients = drinkAttributes.ingredients;
    this.instructions = drinkAttributes.instructions;
  }
    
    renderDrink() {
        return `
        <div class="drink-card">
            <h2>${this.name}</h2>
            <img src="${this.image_url}">
                <ul>
                    ${this.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <p>${this.instructions}</p>
        </div> `
    }
    
}