class Liqour {
  constructor(liqour, liqourAttributes) {
    this.id = liqour.id;
    this.name = liqourAttributes.name;
    this.drink_id = liqourAttributes.drink_id;
  }

  renderLiqour() {
    // dropdown of liqours in database
    let liqourDropdown = document.querySelector("#liqour-dropdown");
    let liqourDropdownOption = document.createElement("option");
    liqourDropdownOption.value = this.id;
    liqourDropdownOption.textContent = this.name;
    liqourDropdown.appendChild(liqourDropdownOption);

    
  }
}
