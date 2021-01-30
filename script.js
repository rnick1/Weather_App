var searchBar = document.querySelector('#search-bar');
var searchSubmitButton = document.querySelector('#search-submit-button');
var savedSearches = document.querySelector('#saved-searches');
var currentWeather = document.querySelector('#current-weather');
var fiveDayForecast = document.querySelector('#five-day-forecast');




function searchWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fdd4a04e93a26488d7033be9fdc7f5e6')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert('Wrong city name!'))
}






// (Pseudocode)This is how I am going to utilize the information from the open weather app:

// (Variables here)

button.addEventListener('click', searchWeather)


// Note: Instead of defining the city on line 6, I can have the users define the city:
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fdd4a04e93a26488d7033be9fdc7f5e6')
// Notice the '+inputValue.value+' that was added instead of a specific city.
