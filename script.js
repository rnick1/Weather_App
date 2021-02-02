var userSearch = document.querySelector('#search-bar');
var searchSubmitButton = document.querySelector('#search-submit-button');
var savedSearches = document.querySelector('#saved-searches');
var currentWeather = document.querySelector('#current-weather');
var fiveDayForecast = document.querySelector('#five-day-forecast');
var cityName = document.querySelector('#city-name');

function searchWeather() {
    var requestWxUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + userSearch.value + '&units=imperial&appid=fdd4a04e93a26488d7033be9fdc7f5e6';

    fetch(requestWxUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityName = document.createElement('h3');
            var temperature = document.createElement('p');
            var humidity = document.createElement('p');
            var windSpeed = document.createElement('p');
            cityName.textContent = data.name;
            temperature.textContent = 'Temperature: ' + data.main.temp + ' degrees F';
            humidity.textContent = 'Humidity: ' + data.main.humidity + ' %';
            windSpeed.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
            currentWeather.append(cityName);
            currentWeather.append(temperature);
            currentWeather.append(humidity);
            currentWeather.append(windSpeed);

        var requestUvUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial&appid=fdd4a04e93a26488d7033be9fdc7f5e6';

        fetch(requestUvUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var uvIndex = document.createElement('p');
                uvIndex.textContent = 'UV Index: ' + data.current.uvi;
                currentWeather.append(uvIndex);
            });

        var savedSearchResult = document.createElement('button');
        var aEl =  document.createElement('a');
        aEl.setAttribute("href", requestUvUrl);
        savedSearchResult.textContent = data.name;
        savedSearches.append(savedSearchResult);
        savedSearchResult.append(aEl);
    });
};
searchSubmitButton.addEventListener('click', searchWeather)