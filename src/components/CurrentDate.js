import { getFormatDate, getCurrentDay, getCurrentTime } from '../js/utils.js'

class CurrentDate extends HTMLElement {
  connectedCallback() {
    this._today = getFormatDate()
    this._day = getCurrentDay()
    this._time = getCurrentTime()
    this.render()
  }

  render() {
    this.innerHTML = `
      <span class="fs-3 text-white text-shadow d-block fw-bold">
        ${this._today}
      </span>
      <span class="fs-6 text-white text-shadow d-block">
        <span class="border-end pe-3">${this._day}</span>
        <span class="ps-3">${this._time}</span>
      </span>
    `
  }
}

customElements.define('current-date', CurrentDate)
