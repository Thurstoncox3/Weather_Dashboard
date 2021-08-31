var timeEl = document.getElementById("time");
var dateEl = document.getElementById("date");
var currentWeatherItemsEl = document.getElementById("current-weather-items");
var timezone = document.getElementById("time-zone");
var countryEl = document.getElementById("country");
var weatherForecastEl = document.getElementById("weather-forecast");
var currentTempEl = document.getElementById("current-temp");


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var API_KEY = `8e5fba16c98e41af9d2662770d9ec81b`



setInterval(() => {
    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var hour = time.getHours();
    var hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";

    timeEl.innerHTML = hoursIn12HrFormat + ":" + minutes + "" + `<span id="am-pm">${ampm}</span`

    dateEl.innerHTML = days[day] + "," + date + "" + months[month]
}, 1000);

getWeatherData();
function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        
        var {latitude, longitude} = success.coords; 

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        .then (res => json())
        .then(data => {
            console.log(data)
            showWeatherData(data);
        })
    })
}
function showWeatherData(data){
    var {humidity, wind_speed}
}