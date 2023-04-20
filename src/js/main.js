// axios import
import axios from 'axios';

// Utility
import { isDay, getIcon } from './utils';

// key for AccuWeather API
const API_KEY = 'wxJnfpf0jV48rijOEwWGCLOLvLB6aKfj';
const BASE_URL = 'http://dataservice.accuweather.com';

const main = () => {
  const searchLocation = document.querySelector('search-location');
  const searchContent = $('.dropdown-content');
  const currentTemp = document.querySelector('current-temp');
  const currentLocation = document.querySelector('current-location');
  const currentStatus = document.querySelector('current-status');
  const forecastList = document.querySelector('forecast-list');

  const showPosition = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = {
      geoposition: `${BASE_URL}/locations/v1/cities/geoposition/search`,
      forecasts: (key) => `${BASE_URL}/forecasts/v1/daily/5day/${key}`,
    };
    const params = {
      geoposition: {
        apikey: API_KEY,
        q: `${latitude},${longitude}`,
        details: true,
        toplevel: true,
      },
      forecasts: {
        apikey: API_KEY,
        details: true,
        metric: true,
      },
    };

    try {
      const geoposition = await axios.get(url.geoposition, { params: params.geoposition });
      const forecasts = await axios.get(url.forecasts(geoposition.data.Key), { params: params.forecasts });
      const location = {
        city: geoposition.data.LocalizedName,
        country: geoposition.data.Country.LocalizedName,
      };

      const today_weather = forecasts.data.DailyForecasts[0];
      const temperature = today_weather.Temperature;
      const day_temp = today_weather.Day;
      const night_temp = today_weather.Night;
      const icon = isDay() ? getIcon(day_temp.Icon) : getIcon(night_temp.Icon);
      const degree = Math.round((temperature.Minimum.Value + temperature.Maximum.Value) / 2);
      const wind = isDay() ? day_temp.Wind.Speed.Value : night_temp.Wind.Speed.Value;
      const liquid = isDay() ? day_temp.TotalLiquid.Value : night_temp.TotalLiquid.Value;
      const rain = isDay() ? day_temp.RainProbability : night_temp.RainProbability;

      const temp = { icon, degree };
      const status = { wind, liquid, rain };

      forecastList.forecasts = forecasts.data;
      currentTemp.temp = temp;
      currentStatus.status = status;
      currentLocation.location = location;
    } catch (error) {
      console.log(error);
    }
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

  searchLocation.addEventListener('input', () => {
    const value = searchLocation.value;
    if (value.length >= 3) {
      const url = `${BASE_URL}/locations/v1/cities/autocomplete`;
      const params = {
        apikey: API_KEY,
        q: value,
      };

      axios
        .get(url, { params })
        .then((response) => {
          searchContent.removeClass('d-none').addClass('d-flex');
          searchContent.empty();
          response.data.forEach((res) => {
            const locationItem = document.createElement('location-item');
            const key = res.Key;
            const city = res.LocalizedName;
            const country = res.Country.LocalizedName;
            locationItem.text = { city, country };
            locationItem.key = key;

            searchContent.append(locationItem);
          });
        })
        .catch((error) => console.log(error));
    } else {
      searchContent.addClass('d-none');
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LOCATION-ITEM') {
      const key = event.target.getAttribute('key');
      const location = event.target.getAttribute('location');
      const url = `${BASE_URL}/forecasts/v1/daily/5day/${key}`;
      const params = {
        apikey: API_KEY,
        details: true,
        metric: true,
      };

      axios
        .get(url, { params })
        .then((response) => {
          searchLocation.value = '';
          searchContent.addClass('d-none');

          const today_weather = response.data.DailyForecasts[0];
          const temperature = today_weather.Temperature;
          const day_temp = today_weather.Day;
          const night_temp = today_weather.Night;
          const icon = isDay() ? getIcon(day_temp.Icon) : getIcon(night_temp.Icon);
          const degree = Math.round((temperature.Minimum.Value + temperature.Maximum.Value) / 2);
          const wind = isDay() ? day_temp.Wind.Speed.Value : night_temp.Wind.Speed.Value;
          const liquid = isDay() ? day_temp.TotalLiquid.Value : night_temp.TotalLiquid.Value;
          const rain = isDay() ? day_temp.RainProbability : night_temp.RainProbability;

          const temp = { icon, degree };
          const status = { wind, liquid, rain };

          forecastList.forecasts = response.data;
          currentTemp.temp = temp;
          currentStatus.status = status;
          currentLocation.location = JSON.parse(location);
        })
        .catch((error) => console.log(error));
    }
  });
};

export default main;
