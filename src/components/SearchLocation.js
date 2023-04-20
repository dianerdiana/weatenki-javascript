class SearchLocation extends HTMLElement {
  connectedCallback() {
    this.render();
    this.input = this.querySelector('input[name="search-location"]');
    this.input.addEventListener('input', () => {
      this.value = this.input.value;
    });
  }

  get value() {
    return this.input.value;
  }

  set value(val) {
    this.input.value = val;
  }

  render() {
    this.classList = 'position-relative col-lg-6 text-center text-lg-start';
    this.innerHTML = `
      <div class="input-group">
        <input
          type="text"
          name="search-location"
          class="form-control shadow-none"
          placeholder="Search..."
          aria-label="Location"
        />
        <span class="btn btn-search p-1 ms-auto input-group-text">
          <img
            src="./assets/icons/search.png"
            width="30px"
            alt="search"
            class="img-thumbnail bg-transparent border-0"
          />
        </span>
      </div>
      <div class="dropdown-content d-none rounded-3 py-2"></div>
    `;
  }
}

customElements.define('search-location', SearchLocation);
