import '../components/CurrentTemp';
import '../components/CurrentLocation';
import '../components/CurrentDate';
import '../components/CurrentStatus';

const main = () => {
  const inputSearch = $('input[name="search-location"]');
  const searchContent = $('.dropdown-content');

  inputSearch.on('input', function () {
    if ($(this).val().length >= 3) {
      searchContent.removeClass('d-none').addClass('d-flex');
    } else {
      searchContent.addClass('d-none');
    }
  });

  const current_temp = $('<current-temp></current-temp>').addClass('col-sm-6 text-center text-sm-start');
  const main_section = $('#main-section');

  main_section.append(current_temp);

  console.log(main_section);
};

export default main;
