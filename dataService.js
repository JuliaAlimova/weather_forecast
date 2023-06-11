let dataService = {

    getCityWeather(cityID, metric) {
        return fetch("https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=bf35cac91880cb98375230fb443a116f&units=" + metric + "&lang=ru")
            .then(resObj => resObj.json())
    },

    getCityForecast(cityID, metric) {
        return fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=bf35cac91880cb98375230fb443a116f&units=" + metric + "&lang=ru")
            .then(resObj => resObj.json())
    }

}