const apiKey = "e24cbabfc3fad96bd87d43cdfe20e34d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        document.querySelector(".error").style.display = "none"
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "'c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block"
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})