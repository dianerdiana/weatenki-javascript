class LocationItem extends HTMLElement {
  set text(txt) {
    this.setAttribute('disabled', false);
    this.setAttribute('location', JSON.stringify(txt));
    this._text = txt;
    this.render();
  }

  get text() {
    return this._text;
  }

  set key(key) {
    this.setAttribute('disabled', false);
    this.setAttribute('key', key);
    this.render();
  }

  get key() {
    return this._key;
  }

  set content(txt) {
    this.setAttribute('disabled', true);
    this._content = txt;
    this.render();
  }

  render() {
    if (this._text) {
      const { city, country } = this._text;

      this.classList = 'dropdown-link fw-bold px-3 py-2 cursor-pointer';
      this.innerText = `${city}, ${country}`;
    } else {
      this.classList = 'dropdown-link fw-bold px-3 py-2 cursor-pointer disabled';
      this.innerText = this._content;
    }
  }
}

customElements.define('location-item', LocationItem);
