class CurrentLocation extends HTMLElement {
  connectedCallback() {
    this._location = {
      city: 'Jakarta',
      country: 'Indonesia',
    };
    this.render();
  }

  set location(location) {
    this._location = location;
    this.render();
  }

  render() {
    const { city, country } = this._location;

    this.classList = 'col-md-6 mb-3 mb-lg-0 text-center text-lg-start';
    this.innerHTML = `
      <img
        src="./assets/icons/location.png"
        alt="location"
        width="30px"
        class="img-thumbnail bg-transparent border-0"
      />
      <span class="text-white text-shadow fw-bold ms-3">
        ${city}, ${country}
      </span>
    `;
  }
}

customElements.define('current-location', CurrentLocation);
