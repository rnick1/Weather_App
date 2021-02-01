var userSearch = document.querySelector('#search-bar');
var searchSubmitButton = document.querySelector('#search-submit-button');
var savedSearches = document.querySelector('#saved-searches');
var currentWeather = document.querySelector('#current-weather');
var fiveDayForecast = document.querySelector('#five-day-forecast');
var cityName = document.querySelector('#city-name');
// var temperature = document.querySelector('#temperature');
// var humidity = document.querySelector('#humidity');
// var windSpeed = document.querySelector('#wind-speed');
// var uvIndex = document.querySelector('#uv-index');


function searchWeather() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+userSearch.value+'&appid=fdd4a04e93a26488d7033be9fdc7f5e6';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
            var cityName = document.createElement('h3');
            var temperature = document.createElement('p');
            var humidity = document.createElement('p');
            var windSpeed = document.createElement('p');
            // var uvIndex = document.createElement('p');

            cityName.textContent = data.name;
            temperature.textContent = data.main.temp;
            humidity.textContent = data.main.humidity;
            windSpeed.textContent = data.wind.speed;
            // uvIndex.textContent = data.?;

            currentWeather.append(cityName);
            currentWeather.append(temperature);
            currentWeather.append(humidity);
            currentWeather.append(windSpeed);
            // currentWeather.append(uvIndex);

          }
)};

// for (var i = 0; i < data.length; i++) {


searchSubmitButton.addEventListener('click', searchWeather)
