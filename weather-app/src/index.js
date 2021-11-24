const container = document.getElementById("output");
const mainScreen = document.querySelector('.container');
const city = document.querySelector("#city");
const country = document.getElementById("country");
const submitButton = document.getElementById("submit-button");
const form = document.getElementById("form");
const isWeatherdescr = {
  overcast: `background-color: rgb(112, 147, 161);
  transition: 0.4s;`,
  mist: `background-color: rgb(144, 214, 226);
  transition: 0.4s;`,
  partlyCloudy: `background-color: rgb(223, 148, 200);
  transition: 0.4s;`
}

const renderWetherData = (obj) => {
  container.innerHTML = null;
  container.innerHTML = `
    <div class="output-introdaction">
          <div class="img">
            <img src="${obj.current.weather_icons[0]}" alt="">
          </div>
          <div class="show-temperature">${obj.current.temperature}℃</div>
          <div class="show-city-country">${obj.location.name}, ${obj.location.country}</div>
        </div>
        <div class="output-main-result">
          <ul>
            <li>Time: ${obj.location.localtime}</li>
            <li>Feels like: ${obj.current.feelslike}</li>
            <li>Today is: ${obj.current.weather_descriptions}</li>
            <li>Wind: ${obj.current.wind_dir}</li>
            <li>Speed: ${obj.current.wind_speed}</li>
            <li>presure: ${obj.current.pressure}</li>
          </ul>
        </div>
        `
};

const getWetherData = async (city, country) => {
  try {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=4d1401039a917d99eba4e9666a58d4a7&query=${city},${country}`)
    let weatherData = await response.json()
    console.log(weatherData);
    renderWetherData(weatherData);
    changeScreeen(weatherData);
  } catch (err) {
    console.log(err);
  }
}

const changeScreeen = function (obj) {
  let resultFromObj = obj.current.weather_descriptions[0];
  if (resultFromObj === "Overcast") {
    mainScreen.style.cssText = isWeatherdescr.overcast;
  } else if (resultFromObj === "Mist") {
    mainScreen.style.cssText = isWeatherdescr.mist;
  } else if (resultFromObj === "Partly cloudy") {
    mainScreen.style.cssText = isWeatherdescr.partlyCloudy;
  } else {
    mainScreen.style.cssText = "background-color: rgb(142, 211, 211);"
  }
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let cityInput = city.value;
  let countryInput = country.value;
  if (!cityInput) {
    city.style = 'border: 1px solid red;'
  } else {
    getWetherData(cityInput, countryInput);
    city.value = null;
    country.value = null
  }
})
// getWetherData('Minsk');