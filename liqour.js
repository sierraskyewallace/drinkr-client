class Liqour {
  constructor(Liqour, LiqourAttributes) {
    this.id = Liqour.id;
    this.name = LiqourAttributes.name;
    this.drink_id = Liqour.drink_id;
  }

  renderLiqour() {
    return `
      <div class="liqour-item">
        <h3>${this.name}</h3>
        
      </div>
    `;
  }
}
