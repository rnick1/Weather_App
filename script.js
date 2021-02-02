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
            var longitude = document.createElement('p');
            var latitude = document.createElement('p');
            cityName.textContent = data.name;
            temperature.textContent = 'Temperature: ' + data.main.temp + ' degrees F';
            humidity.textContent = 'Humidity: ' + data.main.humidity + ' %';
            windSpeed.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
            longitude.textContent = 'Longitude: ' + data.coord.lon;
            latitude.textContent = 'Latitude: ' + data.coord.lat;
            currentWeather.append(cityName);
            currentWeather.append(temperature);
            currentWeather.append(humidity);
            currentWeather.append(windSpeed);
            currentWeather.append(longitude);
            currentWeather.append(latitude);

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

            var requestFiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + userSearch.value + '&appid=fdd4a04e93a26488d7033be9fdc7f5e6';
            
            fetch(requestFiveDayUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })

            var savedUserSearches = [];
            var localStorageContent = localStorage.getItem('savedUserSearches')
            var searches = JSON.parse(localStorageContent)
            console.log(searches);

            var savedSearchObject = {
                city: userSearch.value,
                link: requestWxUrl,
            };
            savedUserSearches.push(savedSearchObject);
            localStorage.setItem('savedUserSearches', JSON.stringify(savedUserSearches));
            console.log(localStorageContent);

            for (var i = 0; i < savedUserSearches.length; i++) {
                var savedCity = document.createElement('p');
                savedCity = searches[i].city;
                savedSearches.append(savedCity);
            }


            

    });
};

searchSubmitButton.addEventListener('click', searchWeather)