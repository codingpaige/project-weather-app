function formattedDate(date) {
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
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[now.getMonth()];
  let dayOfWeek = days[now.getDay()];

  return `${dayOfWeek}<br>${hours}:${minutes}`;
}

/// Day, date & time display
let todayOverview = document.querySelector(".today-daydatetime");
let now = new Date();
todayOverview.innerHTML = formattedDate(now);

/// Current temperature of searched city
function showWeather(response) {
  let cityTemp = Math.round(response.data.main.temp);
  let showCityTemp = document.querySelector(".current-temp-overview");
  showCityTemp.innerHTML = `${cityTemp}°C`;
}

/// Logging search data and pulling to API source
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let location = document.querySelector("h1");
  location.innerHTML = `${searchInput.value}`;
  let apiKey = `0ebc654fccbc00189d5408f3d6f15b08`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.innerHTML}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let locationSearch = document.querySelector("#search-form");
locationSearch.addEventListener("submit", search);
