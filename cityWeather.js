class CityWeather {
  constructor(info) {
    this.info = info;
  }

  getTemp() {
    temp.innerHTML = "";
    let span = document.createElement("span");
    span.innerHTML = document.querySelector(
      "input[name='selectMetric']:checked+label"
    ).textContent;
    temp.innerHTML = Math.round(this.info.main.temp);
    temp.append(span);
  }

  getImg() {
    mainIcons.forEach((img) => {
      img.src =
        "https://openweathermap.org/img/wn/" +
        this.info.weather[0].icon +
        "@2x.png";
    });
  }

  getOtherOptions() {
    let newObj = this.getNewObj();
    for (const key in newObj) {
      let data = document.querySelector("#" + key);
      if (data.id == key) {
        data.textContent = newObj[key];
      }
    }
  }

  getNewObj() {
    let newObj = {};
    newObj.description = this.info.weather[0].description;
    newObj.feels_like =
      Math.round(this.info.main.feels_like) +
      document.querySelector("input[name='selectMetric']:checked+label")
        .textContent;
    newObj.wind_direction = this.info.wind.deg;
    newObj.wind_speed = this.info.wind.speed.toFixed(1) + "m/s";
    newObj.pressure = this.info.main.pressure + "hPa";
    newObj.sunrise = new Date(
      this.info.sys.sunrise * 1000
    ).toLocaleTimeString();
    newObj.sunset = new Date(this.info.sys.sunset * 1000).toLocaleTimeString();
    return newObj;
  }

  getforecastDay() {
    let arrDatesForecast = this.getNewArrDates();

    arrDatesForecast.forEach((date) => {
      if (date == today) {
        forecastDay.insertAdjacentHTML(
          "beforeend",
          `<option value="${date}">Сегодня</option>`
        );
      } else {
        forecastDay.insertAdjacentHTML(
          "beforeend",
          `<option value="${date}">${date}</option>`
        );
      }
    });
  }

  getWeatherTimeTemp() {
    let arrListForecast = this.info.list;

    time.textContent = "";
    img_time_weather.textContent = "";
    temp_time_weather.textContent = "";

    for (let i = 0; i < arrListForecast.length; i++) {
      const element = arrListForecast[i];

      let imgForecast = element.weather[0].icon;
      let tempWeatherForecast = element.main.temp;
      let timesForecast = element.dt_txt.slice(10);

      let datesForecast = new Date(element.dt * 1000).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
        timeZone: "UTC",
      });

      if (forecastDay.value == datesForecast) {
        time.insertAdjacentHTML("beforeend", `<th>${timesForecast}</th>`);
        img_time_weather.insertAdjacentHTML(
          "beforeend",
          `<td><img src="https://openweathermap.org/img/wn/${imgForecast}@2x.png" width="30" height="30" alt="Картинка" id="mainIcon"></td>`
        );
        temp_time_weather.insertAdjacentHTML(
          "beforeend",
          `<td>${Math.round(tempWeatherForecast)} ${
            document.querySelector("input[name='selectMetric']:checked+label")
              .textContent
          }</td>`
        );
      }
    }
  }

  getNewArrDates() {
    let arrListForecast = this.info.list;
    let arrDatesForecast = [];

    for (let i = 0; i < arrListForecast.length; i++) {
      const element = arrListForecast[i];
      let dateForecast = new Date(element.dt * 1000);

      let formatter = new Intl.DateTimeFormat("ru", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });

      let datesForecast = formatter.format(dateForecast);
      for (let k = 0; k < arrListForecast.length; k++) {
        if (arrDatesForecast.indexOf(datesForecast) == -1) {
          arrDatesForecast.push(datesForecast);
        }
      }
    }
    return arrDatesForecast;
  }
}
