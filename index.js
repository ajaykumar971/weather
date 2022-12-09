const options = {
     method: 'GET',
     headers: {
          'X-RapidAPI-Key': 'af4e07d24emsh7603cd7fb0310c2p122652jsn88f2728b3e51',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
     }
};

const getWeather = (city) => {

     cityName.innerHTML = city

     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
          .then(response => response.json())
          .then(response => {

               console.log(response)

               // cloud_pct.innerHTML = response.cloud_pct
               temp.innerHTML = response.temp
               feels_like.innerHTML = response.feels_like
               humidity.innerHTML = response.humidity
               min_temp.innerHTML = response.min_temp
               max_temp.innerHTML = response.max_temp
               wind_speed.innerHTML = response.wind_speed
               wind_degrees.innerHTML = response.wind_degrees
               sunrise.innerHTML = response.sunrise
               sunset.innerHTML = response.sunset
          })
          .catch(err => console.error(err));


}
srch.addEventListener("click", (e) => {
     e.preventDefault()
     getWeather(city.value)
})
getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          hyd1.innerHTML = response.feels_like
          hyd2.innerHTML = response.humidity
          hyd3.innerHTML = response.max_temp
          hyd4.innerHTML = response.min_temp
          hyd7.innerHTML = response.temp
          hyd8.innerHTML = response.wind_degrees
          hyd9.innerHTML = response.wind_speed
     })
     .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          luck1.innerHTML = response.feels_like
          luck2.innerHTML = response.humidity
          luck3.innerHTML = response.max_temp
          luck4.innerHTML = response.min_temp
          luck7.innerHTML = response.temp
          luck8.innerHTML = response.wind_degrees
          luck9.innerHTML = response.wind_speed
     })
     .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          chen1.innerHTML = response.feels_like
          chen2.innerHTML = response.humidity
          chen3.innerHTML = response.max_temp
          chen4.innerHTML = response.min_temp
          chen7.innerHTML = response.temp
          chen8.innerHTML = response.wind_degrees
          chen9.innerHTML = response.wind_speed
     })
     .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneswar', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          gn1.innerHTML = response.feels_like
          gn2.innerHTML = response.humidity
          gn3.innerHTML = response.max_temp
          gn4.innerHTML = response.min_temp
          gn7.innerHTML = response.temp
          gn8.innerHTML = response.wind_degrees
          gn9.innerHTML = response.wind_speed
     })
     .catch(err => console.error(err));
