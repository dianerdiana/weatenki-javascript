class CurrentTemp extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <img
        src="./assets/icons/WeatherIcon - 2-40.svg"
        alt="today-forecast"
        class="img-fluid"
        width="143px"
        id="today_forecast"
      />
      <div class="my-3">
        <span id="today_temp" class="today-temp">
          27
          <span class="temp"> ℃ </span>
        </span>
      </div>
    `
  }
}

customElements.define('current-temp', CurrentTemp)
