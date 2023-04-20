class LocationItem extends HTMLElement {
  set text(txt) {
    this.setAttribute('location', JSON.stringify(txt));
    this._text = txt;
    this.render();
  }

  set key(key) {
    this.setAttribute('key', key);
    this.render();
  }

  get key() {
    return this._key;
  }

  get text() {
    return this._text;
  }

  render() {
    const { city, country } = this._text;

    this.classList = 'dropdown-link fw-bold px-3 py-2 cursor-pointer';
    this.innerText = `${city}, ${country}`;
  }
}

customElements.define('location-item', LocationItem);
