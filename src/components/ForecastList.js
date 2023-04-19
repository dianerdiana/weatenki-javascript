import { fiveDays } from '../js/fiveDaysForecast.js';
import './ForecastItem.js';

class ForecastList extends HTMLElement {
  connectedCallback() {
    this._forecasts = fiveDays.DailyForecasts;
    this.render();
  }

  set forecasts(fcs) {
    this._forecasts = fcs.DailyForecasts;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._forecasts.forEach((fc, index) => {
      const forecastItem = document.createElement('forecast-item');
      const forecast = {
        date: fc.Date,
        temp: fc.Temperature,
        day: fc.Day.Icon,
        night: fc.Night.Icon,
      };
      forecastItem.setAttribute('forecast', JSON.stringify(forecast));
      this.appendChild(forecastItem);
    });
  }
}

customElements.define('forecast-list', ForecastList);
