class Ingredient {
  constructor(ingredient, ingredientAttributes) {
    this.id = ingredient.id;
    this.name = ingredientAttributes.name;
  }

  // render and return ingredients as checkboxes
  renderIngredients() {
    let checkbox = `<input type="checkbox" name="ingredient" value="${this.id}">${this.name}</input>`;
    return checkbox;
  }

}