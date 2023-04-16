class CurrentLocation extends HTMLElement {
  connectedCallback() {
    this.province = this.getAttribute('province') || 'Jakarta'
    this.country = this.getAttribute('country') || 'Indonesia'
    this.render()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue
    this.render()
  }

  static get observedAttributes() {
    return ['province', 'country']
  }

  render() {
    this.innerHTML = `
      <img
        src="./assets/icons/location.png"
        alt="location"
        width="30px"
        class="img-thumbnail bg-transparent border-0"
      />
      <span class="text-white text-shadow fw-bold ms-3">
        ${this.province}, ${this.country}
      </span>
    `
  }
}

customElements.define('current-location', CurrentLocation)
