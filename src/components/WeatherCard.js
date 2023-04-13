class WeatherCard extends HTMLElement {
  set weather(forecast) {
    this._weather = forecast
    this.render()
  }

  render() {}
}
