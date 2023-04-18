import '../components/CurrentLocation'
import '../components/CurrentDate'
import '../components/CurrentStatus'

const main = () => {
  const inputSearch = $('input[name="search-location"]')
  const searchContent = $('.dropdown-content')

  inputSearch.on('input', function () {
    if ($(this).val().length >= 3) {
      searchContent.removeClass('d-none').addClass('d-flex')
    } else {
      searchContent.addClass('d-none')
    }
  })
}

export default main
