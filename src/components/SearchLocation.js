class SearchLocation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
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
      <div class="dropdown-content d-none rounded-3 py-2">
        <a href="#" class="dropdown-link px-3 py-2">Link 1</a>
      </div>
    `;
  }
}

customElements.define('search-location', SearchLocation);
