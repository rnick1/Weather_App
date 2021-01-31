var userSearch = document.querySelector('#search-bar');
var searchSubmitButton = document.querySelector('#search-submit-button');
var savedSearches = document.querySelector('#saved-searches');
var currentWeather = document.querySelector('#current-weather');
var fiveDayForecast = document.querySelector('#five-day-forecast');
var cityName = document.querySelector('#city-name');
var temperature = document.querySelector('#temperature');
var humidity = document.querySelector('#humidity');
var windSpeed = document.querySelector('#wind-speed');
var uvIndex = document.querySelector('#uv-index');



function searchWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+userSearch.value+'&appid=fdd4a04e93a26488d7033be9fdc7f5e6')
    .then(response => response.json())
    .then(data => console.log(data))

}

button.addEventListener('click', searchWeather)





// (Pseudocode)This is how I am going to utilize the information from the open weather app:

// (Variables here)
// .catch(err => alert('Incorrect city'))



// Note: Instead of defining the city on line 6, I can have the users define the city:
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fdd4a04e93a26488d7033be9fdc7f5e6')
// Notice the '+inputValue.value+' that was added instead of a specific city.
