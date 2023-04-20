class CurrentTemp extends HTMLElement {
  connectedCallback() {
    this._temp = {
      icon: {
        id: 7,
        text: 'Cloudy',
        img: './assets/icons/WeatherIcon - 2-32.svg',
      },
      degree: 27,
    };
    this.render();
  }

  set temp(temp) {
    this._temp = temp;
    this.render();
  }

  get temp() {
    return this._temp;
  }

  render() {
    const { icon, degree } = this._temp;

    this.classList = 'col-md-4 text-center text-lg-start';
    this.innerHTML = `
      <img
        src="${icon.img}"
        alt="today-forecast"
        class="img-fluid"
        width="143px"
        id="today_forecast"
      />
      <div class="my-3">
        <span id="today_temp" class="today-temp">
          ${degree}
          <span class="temp"> ℃ </span>
        </span>
      </div>
    `;
  }
}

customElements.define('current-temp', CurrentTemp);
