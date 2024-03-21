
let apiKey = "dca95ef887b9c26f9272b667af63a37a";
let inputbox = document.querySelector(".search input");
let btn = document.querySelector(".search button");

function weatheropen(cityname){
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    let temprture = response.data.main.temp - 273.15;
    document.querySelector(".temp").innerHTML = Math.round(temprture) + " °C"
    document.querySelector(".country").innerHTML ="Country <br><br>" +  response.data.sys.country;
    document.querySelector(".humidity").innerHTML ='Humidity <br><br>' + response.data.main.humidity + " %";
    document.querySelector(".cityname").innerHTML = response.data.name;
    document.querySelector(".wind").innerHTML = "Wind <br><br>" + response.data.wind.speed + " km/h";

  })
  .catch(function (error) {
    // handle error
    console.log(error.config.headers.Accept);
  })
  .finally(function () {
    // always executed
  });
};

  btn.addEventListener("click", function(){
    weatheropen(inputbox.value)
  })
