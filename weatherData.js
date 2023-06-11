class WeatherData {
  constructor(cityID, metric) {
    this.cityID = cityID;
    this.metric = metric;
  }

  showWeather() {
    dataService.getCityWeather(this.cityID, this.metric).then((cityInfo) => {
      this.drawListWeather(cityInfo);
    });
    // .catch((error) => console.log(error.message));
  }

  drawListWeather(cityInfo) {
    let cityObject = new CityWeather(cityInfo);
    cityObject.getTemp();
    cityObject.getImg();
    cityObject.getOtherOptions();
  }

  showWeatherForecast() {
    dataService
      .getCityForecast(this.cityID, this.metric)
      .then((cityInfo) => this.drawListForecast(cityInfo));
    // .catch((error) => console.log(error.message));
  }

  drawListForecast(cityInfo) {
    let cityObject = new CityWeather(cityInfo);
    if (forecastDay.innerHTML == "") cityObject.getforecastDay();
    cityObject.getWeatherTimeTemp();
  }
}
