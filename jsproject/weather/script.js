document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherInfo = document.getElementById("search-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDis = document.getElementById("city-name");
  const tempDis = document.getElementById("temp");
  const desDis = document.getElementById("description");
  const errorMessageDis = document.getElementById("error-message");
  const API_KEY = "14396e7e9a759d90c67b41fba6a5eadd";

  // Hide error and weather info on page load
  errorMessageDis.classList.add("hidden");
  weatherInfo.classList.add("hidden");

  getWeatherInfo.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    // // Reset error and weather info display
    // errorMessageDis.classList.add("hidden");
    // weatherInfo.classList.add("hidden");

    if (!city) {
      errorMessageDis.classList.remove("hidden");
      return;
    }

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }
    return await response.json();
  }

  function displayWeatherData(weatherData) {
    // Display weather info and hide error message
    weatherInfo.classList.remove("hidden");
    errorMessageDis.classList.add("hidden");
    console.log(weatherData);

    const { name } = weatherData;
    const { temp } = weatherData.main;
    const { description } = weatherData.weather[0];

    cityNameDis.textContent = `City: ${name}`;
    tempDis.textContent = `Temperature: ${temp}°C`;
    desDis.textContent = `Description: ${description}`;
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessageDis.classList.remove("hidden");
  }
});
