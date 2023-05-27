const apikey = "01edd3b35bf179ad0f4e866969381beb";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon0 = document.querySelector(".weather-icon0");
const weatherIcon1 = document.querySelector(".weather-icon1");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`);
    var data = await response.json(); 
   
 document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
document.querySelector (".humidity").innerHTML = data.main.humidity + "%";
 document.querySelector (".wind").innerHTML = data.wind.speed + "km/h";
 
if(data.weather[0].main == "Haze"){
    weatherIcon0.src ="images/haze.png";
    weatherIcon1.src ="images/haze1.jpg";  
}
else if (data.weather[0].main == "Clouds"){
    weatherIcon0.src ="images/clouds.png";
    weatherIcon1.src ="images/clouds1.jpg"; 
}
else if (data.weather[0].main == "Clear"){
    weatherIcon0.src ="images/clear.png";
    weatherIcon1.src ="images/clear.jpg"; 
}
else if (data.weather[0].main == "Rain"){
    weatherIcon0.src ="images/rain.png";
    weatherIcon1.src ="images/rain1.jfif"; 
}
else  if (data.weather[0].main == "Mist"){
    weatherIcon0.src ="images/mist.png";
    weatherIcon1.src ="images/mist1.jfif"; 
}
document.querySelector(".weather").style.display ="block";

}
function handleSearch() {
    var cityInput = document.getElementById("cityInput").value;
    if (cityInput.trim() !== "") {
        
      // Call the checkWeather function with the user input as the city parameter
      checkWeather(cityInput);

    }
  }

