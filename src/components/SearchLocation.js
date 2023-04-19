import axios from 'axios';

const API_KEY = 'wxJnfpf0jV48rijOEwWGCLOLvLB6aKfj';

class SearchLocation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  handleChange() {
    const value = $('input').val();
    const searchContent = $('.dropdown-content');
    if (value.length >= 3) {
      searchContent.removeClass('d-none').addClass('d-flex');
      this.getLocations(value).then((res) => {
        if (res.status == 200) {
          res.data.forEach((loc) => {
            const location = $(`
              <a href="#" class="dropdown-link fw-bold px-3 py-2">
                ${loc.LocalizedName}
              </a>`);
            $('.dropdown-content').append(location);
          });
        }
      });
    } else {
      searchContent.addClass('d-none');
    }
  }

  async getLocations(val) {
    try {
      const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${val}`;
      const locations = await axios.get(url);
      return locations;
    } catch (error) {
      console.log(error);
    }
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
      <div class="dropdown-content d-none rounded-3 py-2"></div>
    `;
  }
}

customElements.define('search-location', SearchLocation);
