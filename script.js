let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let formattedDate = document.querySelector(".today-daydatetime");
let currentMonth = months[now.getMonth()];
let currentDay = now.getDate();
let currentDayOfWeek = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

formattedDate.innerHTML = `${currentMonth} ${currentDay},<br>${currentDayOfWeek}<br>${currentHour}:${currentMinutes}`;

function showWeather(response) {
  let cityTemp = Math.round(response.data.main.temp);
  let showCityTemp = document.querySelector(".current-temp-overview");
  showCityTemp.innerHTML = `${cityTemp}°C`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let location = document.querySelector("h1");
  location.innerHTML = `${searchInput.value}`;
  let apiKey = `0ebc654fccbc00189d5408f3d6f15b08`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.innerHTML}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

/// function showGeoWeather(response) {
///  console.log(response);
/// }

/// function retrievePosition(position) {
/// let geoApiKey = `5f472b7acba333cd8a035ea85a0d4d4c`;
///let lon = position.coords.longitude;
///let lat = position.coords.latitude;
///let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${geoApiKey}`;
///axios.get(geoUrl).then(showGeoWeather);

let locationSearch = document.querySelector("#search-form");
locationSearch.addEventListener("submit", search);

/// let geoLocation = document.querySelector(".current-location-button");
/// geoLocation.addEventListener("click", geoLocationData);
/// navigator.geolocation.getCurrentPosition(retrievePosition);
