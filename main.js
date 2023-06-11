let arreyCity = [
  {
    name: "Kharkiv",
    id: 706483,
  },
  {
    name: "Kyiv",
    id: 703448,
  },
  {
    name: "New York",
    id: 5128638,
  },
  {
    name: "London",
    id: 2643743,
  },
];

let selectCity = document.querySelector("#selectCity");
let selectMetric = document.querySelector("#selectMetric");
let radioButtonsMetric = document.querySelectorAll(
  "input[name='selectMetric']"
);

let temp = document.querySelector("#temp");
let optionsWeather = Array.from(
  document.querySelectorAll(".options_weather>p>span")
);
let mainIcons = document.querySelectorAll("#mainIcon");
let forecastDay = document.querySelector("#forecastDay");
let time = document.querySelector("#time");
let img_time_weather = document.querySelector("#img_time_weather");
let temp_time_weather = document.querySelector("#temp_time_weather");
let tableForecast = document.querySelector("#tableForecast");

let currentDate = document.querySelector("#current_date");

let today = new Date().toLocaleString("ru", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
  timeZone: "UTC",
});

currentDate.innerHTML += today;

arreyCity.forEach((city) => {
  selectCity.insertAdjacentHTML(
    "beforeend",
    `<option value="${city.id}">${city.name}</option>`
  );
});

function checkMetric() {
  radioButtonsMetric.forEach((btn) => {
    if (btn.checked) {
      weatherCity = new WeatherData(selectCity.value, btn.value);
    }
  });
}

let weatherCity = new WeatherData(selectCity.value, "metric");
weatherCity.showWeather();
weatherCity.showWeatherForecast();

selectMetric.addEventListener("change", () => {
  checkMetric();
  weatherCity.showWeather();
  weatherCity.showWeatherForecast();
});

selectCity.addEventListener("change", () => {
  checkMetric();
  weatherCity.showWeather();
  weatherCity.showWeatherForecast();
});

forecastDay.addEventListener("change", () => {
  weatherCity.showWeatherForecast();
});
