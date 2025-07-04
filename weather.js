const inputbox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_image = document.querySelector("weather-image");
const temperature = document.querySelector("temperature");
const description = document.querySelector("description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector("location-not-found");

const weather_body = document.querySelector("weather-body");

async function checkweather(city) {
  const api_key = "35a4a1913d0c93744d070f8222ac20a1";
  const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`;

  const weather_data = await fetch(`${api_url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  location_not_found.style.display = "flex";
  weather_body.style.display = "none";
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed} km/hr`;

  switch (weather_data.weather[0].main) {
    case "cloudy":
      weather_image.src = "cloudy.jpg";
      break;
    case "humidity":
      weather_image.src = "humidity.jpg";
      break;
    case "lightning":
      weather_image.src = "lightning.jpg";
      break;
    case "pic1":
      weather_image.src = "pic1.jpg";
      break;
    case "rain":
      weather_image.src = "rain.jpg";
      break;
    case "rainy-day":
      weather_image.src = "rainy-day.jpg";
      break;
    case "search":
      weather_image.src = "search.jpg";
      break;
    case "sunny":
      weather_image.src = "sunny.jpg";
      break;
    case "wind":
      weather_image.src = "wind.jpg";
      break;
  }
  console.log(weather_data);
}

searchBtn.addEventListener(`click`, () => {
  checkweather(inputbox.value);
});
