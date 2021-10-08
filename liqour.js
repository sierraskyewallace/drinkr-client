class Liqour {
  constructor(liqour, liqourAttributes) {
    this.id = liqour.id;
    this.name = liqourAttributes.name;
    this.drink_id = liqourAttributes.drink_id;
    Liqour.all.push(this);
  }

  renderLiqour() {
    // render liqour in a dropdown
    return `<option value="${this.id}">${this.name}</option>`;









  






    


    



    
  }
}
Liqour.all = [];