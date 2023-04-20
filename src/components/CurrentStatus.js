class CurrentStatus extends HTMLElement {
  connectedCallback() {
    this._status = {
      wind: 10,
      liquid: 50,
      rain: 0.2,
    };
    this.render();
  }

  set status(status) {
    this._status = status;
    this.render();
  }

  render() {
    const { wind, liquid, rain } = this._status;
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
        <span class="text-white text-shadow fw-bold">${wind} km/h</span>
      </div>
      <div class="d-flex col-lg-4 align-items-center px-4">
        <img
          src="./assets/icons/today-hum.png"
          alt="today-liquid"
          class="img-thumbnail bg-transparent border-0"
          width="30px"
        />
        <span class="ms-2 me-4 text-white text-shadow fw-bold">
          Liquid
        </span>
        <span class="text-white text-shadow fw-bold">${liquid}mm</span>
      </div>
      <div class="d-flex col-lg-4 align-items-center ps-4">
        <img
          src="./assets/icons/today-rain.png"
          alt="today-rain"
          class="img-thumbnail bg-transparent border-0"
          width="30px"
        />
        <span class="ms-2 me-4 text-white text-shadow fw-bold">
          Rain
        </span>
        <span class="text-white text-shadow fw-bold">${rain}%</span>
      </div>
    `;
  }
}

customElements.define('current-status', CurrentStatus);
