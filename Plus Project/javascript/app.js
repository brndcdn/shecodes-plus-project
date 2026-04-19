function showCityInfo(event) {
  {
    event.preventDefault();
    let input = document.querySelector("#city");
    let cityLabel = document.querySelector("h1");
    cityLabel.innerHTML = input.value;
  }

  function ShowCityTemperature(response) {
    let cityTemperature = Math.round(response.data.temperature.current);

    let cityTemperatureLabel = document.querySelector("#city-temp");
    cityTemperatureLabel.innerHTML = cityTemperature;
  }

  let apiKey = "9215d217o28938dd2t4a9f123417b908";

  let input = document.querySelector("#city");
  let inputCity = input.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(ShowCityTemperature);
}

let cityInput = document.querySelector("#user-city");
cityInput.addEventListener("submit", showCityInfo);

//Date code
let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[currentDate.getDay()];

let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentTime = `${currentHour}:${currentMinutes}`;

if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

let hourToday = document.querySelector("#current-day-and-time");
hourToday.innerHTML = `${currentDay} ${currentTime}`;