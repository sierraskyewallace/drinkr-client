class Ingredient {
  constructor(ingredient, ingredientAttributes) {
    this.id = ingredient.id;
    this.name = ingredientAttributes.name;
    this.drink_id = ingredient.drink_id;
  }

  // render and return ingredients as checkboxes
  renderIngredients() {
    return `
      <div class="ingredient-checkbox">
        <input type="checkbox" name="ingredient" value="${this.id}" id="ingredient-${this.id}">
        <label for="ingredient-${this.id}">${this.name}</label>
      </div>
    `;
    
  }
}