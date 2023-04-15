class TodayTemp extends HTMLElement {
  constructor() {
    this._images = {
      rain: '../assets/icons/WeatherIcon - 2-40.svg',
    }
  }

  connectedCallback() {
    this.render()
  }

  set forecast(fc) {
    this._forecast = fc
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="col-sm-6">
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
      </div>
    `
  }
}
