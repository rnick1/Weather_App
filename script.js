// Variables taken from the HTML
var searchSubmitButton = document.querySelector('#search-submit-button');
var currentWeather = document.querySelector('#current-weather');
var fiveDayForecast = document.querySelector('#five-day-forecast');
var cityName = document.querySelector('#city-name');
var searchSaveButton = document.querySelector('#search-save-button');
var savedSearches = document.querySelector('#saved-searches');
var userSearch = document.querySelector('#search-bar');
var historyArray = JSON.parse(localStorage.getItem("history")) || [];
// searchWeather function runs whenever the user clicks search
function searchWeather(searchedCity) {
    // This first fetch request takes the name of the city the user types into the search bar and collects the city name, latitude, and longitude.
    var requestWxUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchedCity + '&units=imperial&appid=fdd4a04e93a26488d7033be9fdc7f5e6';
    
    fetch(requestWxUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // This displays the city name for the current weather.
            var cityName = document.createElement('h3');
            cityName.textContent = data.name;
            currentWeather.append(cityName);
        // This fetch request takes the data gathered in the previous fetch request and collects more details regarding wind speed, temperature, 
        // humidity, and the UV index both for the current day and for the five-day forecast.
        var requestUvUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial&exclude=hourly,minutely&appid=fdd4a04e93a26488d7033be9fdc7f5e6';

        fetch(requestUvUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                // This displays information for the current weather.
                var windSpeed = document.createElement('p');
                var temperature = document.createElement('p');
                var humidity = document.createElement('p');
                var uvIndex = document.createElement('p');
                windSpeed.textContent = 'Wind Speed: ' + data.current.wind_speed + ' MPH';
                temperature.textContent = 'Temperature: ' + data.current.temp + ' degrees F';
                humidity.textContent = 'Humidity: ' + data.current.humidity + ' %';
                uvIndex.textContent = 'UV Index: ' + data.current.uvi;
                currentWeather.append(windSpeed);
                currentWeather.append(temperature);
                currentWeather.append(humidity);
                currentWeather.append(uvIndex);
                if(data.current.uvi > 7.99) {
                uvIndex.setAttribute('class', 'uv-unsafe')
                }
                else{
                uvIndex.setAttribute('class', 'uv-safe')
                };

                // This for-loop gathers and displays weather information for a five day period.
                for(var i = 0; i < 5; i++) {
                var forecastDiv = document.createElement('div');
                forecastDiv.setAttribute('id', 'forecast');
                var day = document.createElement('h5');
                day.setAttribute('class', 'day');
                var forWindSpeed = document.createElement('p');
                var forTemperature = document.createElement('p');
                var forHumidity = document.createElement('p');
                var forUVI = document.createElement('p');
                day.textContent = [i+1] + ' day(s) out';
                forWindSpeed.textContent = 'Wind Speed: ' + data.daily[i].wind_speed + ' MPH';
                forTemperature.textContent = 'Temperature: ' + data.daily[i].temp.day + ' degrees F';
                forHumidity.textContent = 'Humidity: ' + data.daily[i].humidity + ' %';
                forUVI.textContent = 'UV Index: ' + data.daily[i].uvi;
                fiveDayForecast.append(forecastDiv);
                forecastDiv.append(day);
                forecastDiv.append(forWindSpeed);
                forecastDiv.append(forTemperature);
                forecastDiv.append(forHumidity);
                forecastDiv.append(forUVI);
                if(data.daily[i].uvi > 7.99) {
                forUVI.setAttribute('class', 'uv-unsafe')
                }
                else{
                forUVI.setAttribute('class', 'uv-safe')
                };
                };

            });
            // This code is where I am taking city names and storing it in local storage. My biggest challenge in this project has been to get it 
            // to populate the saved searches section without clearing each time the browser refreshes.
            historyArray.push(searchedCity);
            localStorage.setItem("history", JSON.stringify(historyArray));

            renderHistory();
        });
};

function renderHistory() {
    savedSearches.innerHTML = '';
    fiveDayForecast.innerHTML = '';
    for(var i = 0; i < historyArray.length; i++) {
        var savedCity = historyArray[i];
        var savedSearchButton = document.createElement('button');
        savedSearchButton.textContent = savedCity
        savedSearches.append(savedSearchButton);
    };
};

savedSearches.addEventListener('click', function(e) {
    currentWeather.innerHTML = '';
    fiveDayForecast.innerHTML = '';
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    var nameButton = e.target;
    searchWeather(nameButton.textContent);
})
searchSubmitButton.addEventListener('click', function(e) {
    searchWeather(userSearch.value);
    currentWeather.innerHTML = '';

})
renderHistory();