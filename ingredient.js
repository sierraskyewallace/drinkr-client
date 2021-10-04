class Ingredient {
  constructor(ingredient, ingredientAttributes) {
    this.id = ingredient.id;
    this.name = ingredientAttributes.name;
    this.drink_id = ingredient.drink_id;
  }

  // render and return ingredients as checkboxes
  renderIngredients() {
    

    let checkbox = `<input type="checkbox" id="ingredients"name="ingredient" value="${this.id}">${this.name}</input>`;
    return checkbox;
  }

}