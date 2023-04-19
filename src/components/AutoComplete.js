class AutoComplete extends HTMLElement {
  static set text(txt) {
    this._text = txt;
    this.render();
  }

  render() {
    this.classList = 'dropdown-link fw-bold px-3 py-2';
    this.innerText = this._text;
  }
}

customElements.define;
