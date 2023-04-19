import { getCurrentDay } from '../js/utils';

class ForecastItem extends HTMLElement {
  connectedCallback() {
    this._forecast = JSON.parse(this.getAttribute('forecast'));
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['forecast'];
  }

  render() {
    if (this._forecast) {
      const { date, temp } = this._forecast;
      const day = getCurrentDay({ Format: 'short', Input: date });

      this.classList = 'col-6 col-sm-4 col-lg-2 mb-3 mb-lg-0';
      this.innerHTML = `
      <div class="card bg-transparent border-0 shadow">
        <div class="card-header border-0 bg-glass text-center pt-3">
          <span class="text-white fw-bold">${Math.round((temp.Minimum.Value + temp.Maximum.Value) / 2)}℃</span>
        </div>
        <div class="card-body bg-glass text-center">
          <img src="./assets/images/WeatherIcon - 2-32.svg" alt="weather" class="img-fluid" width="80px" />
        </div>
        <div class="card-footer border-0 bg-glass text-center pb-3">
          <span class="text-white fw-bold">${day}</span>
        </div>
      </div>
    `;
    }
  }
}

customElements.define('forecast-item', ForecastItem);
