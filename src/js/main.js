import '../components/LocationItem';
import axios from 'axios';

const API_KEY = 'wxJnfpf0jV48rijOEwWGCLOLvLB6aKfj';
const BASE_URL = 'http://dataservice.accuweather.com';

const main = () => {
  const searchLocation = document.querySelector('search-location');
  const searchContent = $('.dropdown-content');

  searchLocation.addEventListener('input', () => {
    const value = searchLocation.value;
    if (value.length >= 3) {
      const url = `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`;

      axios
        .get(url)
        .then((response) => {
          searchContent.removeClass('d-none').addClass('d-flex');
          searchContent.empty();
          response.data.forEach((res) => {
            const locationItem = document.createElement('location-item');
            const key = res.Key;
            const city = res.LocalizedName;
            const country = res.Country.LocalizedName;
            locationItem.text = `${city}, ${country}`;
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
      const url = `${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&details=true&metric=true`;

      axios
        .get(url)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  });
};

export default main;
