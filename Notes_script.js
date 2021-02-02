        // Code for use with local storage:
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