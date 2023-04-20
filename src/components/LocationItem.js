class LocationItem extends HTMLElement {
  set text(txt) {
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

  render() {
    this.classList = 'dropdown-link fw-bold px-3 py-2 cursor-pointer';
    this.innerText = this._text;
  }
}

customElements.define('location-item', LocationItem);
