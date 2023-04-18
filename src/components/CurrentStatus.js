class CurrentStatus extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="d-flex col-lg-4 align-items-center pe-md-0 px-4">
        <img
          src="./assets/icons/today-wind.png"
          alt="today-wind"
          class="img-thumbnail bg-transparent border-0"
          width="30px"
        />
        <span class="ms-2 me-4 text-white text-shadow fw-bold">
          Wind
        </span>
        <span class="text-white text-shadow fw-bold">10 km/h</span>
      </div>
      <div class="d-flex col-lg-4 align-items-center px-4">
        <img
          src="./assets/icons/today-hum.png"
          alt="today-hum"
          class="img-thumbnail bg-transparent border-0"
          width="30px"
        />
        <span class="ms-2 me-4 text-white text-shadow fw-bold"
          >Hum</span
        >
        <span class="text-white text-shadow fw-bold">50%</span>
      </div>
      <div class="d-flex col-lg-4 align-items-center ps-4">
        <img
          src="./assets/icons/today-rain.png"
          alt="today-rain"
          class="img-thumbnail bg-transparent border-0"
          width="30px"
        />
        <span class="ms-2 me-4 text-white text-shadow fw-bold"
          >Rain</span
        >
        <span class="text-white text-shadow fw-bold">0.2%</span>
      </div>
    `
  }
}

customElements.define('current-status', CurrentStatus)
