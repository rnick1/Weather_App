        // Code to use with local storage:
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




// This is for the 5-day URL:
var requestFiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + userSearch.value + '&appid=fdd4a04e93a26488d7033be9fdc7f5e6';
            
fetch(requestFiveDayUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})

// This is for the buttons:
        // var savedSearchResult = document.createElement('button');
        // var aEl =  document.createElement('a');
        // aEl.setAttribute("href", requestUvUrl);
        // savedSearchResult.textContent = data.name;
        // savedSearches.append(savedSearchResult);
        // savedSearchResult.append(aEl);


        var savedSearchValues = []
        var userSearchValues = {
            city: data.name,
            link: requestWxUrl,
        };
        savedSearchValues.push(userSearchValues)

        localStorage.setItem('Cities', JSON.stringify(savedSearchValues))
        console.log(savedSearchValues)


        for (var i = 0; i < historyArray.length; i++) {
            var searchText = historyArray;
            console.log(historyArray);
            var currentSearch = document.createElement("button");
            currentSearch.textContent = searchText;
            savedSearches.append(currentSearch);
        };

            // console.log(historyArray.length);
    
    // for(var i = 0; i < historyArray.length; i++)
    // var savedSearch = historyArray[i].history
    // savedSearchLocation = document.createElement('button')
    // savedSearchLocation.textContent = savedSearch;
    // savedSearches.append(savedSearchLocation)
