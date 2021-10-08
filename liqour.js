class Liqour {
  constructor(liqour, liqourAttributes) {
    this.id = liqour.id;
    this.name = liqourAttributes.name;
    this.drink_id = liqourAttributes.drink_id;
  }

  renderLiqour() {
    // return checkbox for liqour or have field to add new liqour
    return `
      <div class="liqour-item">
        <input type="checkbox" name="liqour" value="${this.id}" id="liqour-${this.id}">
        <label for="liqour-${this.id}">${this.name}</label>
      </div>
    `;




  






    


    



    
  }
}
