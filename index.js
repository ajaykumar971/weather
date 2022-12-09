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

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hydrabad', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          hyd1.innerHTML = response.temp
          hyd2.innerHTML = response.feels_like
          hyd3.innerHTML = response.humidity
          hyd4.innerHTML = response.min_temp
          hyd5.innerHTML = response.max_temp
          hyd6.innerHTML = response.wind_speed
          hyd7.innerHTML = response.wind_degrees
          hyd8.innerHTML = response.sunrise
          hyd9.innerHTML = response.sunset
     })
     .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          luck1.innerHTML = response.temp
          luck2.innerHTML = response.feels_like
          luck3.innerHTML = response.humidity
          luck4.innerHTML = response.min_temp
          luck5.innerHTML = response.max_temp
          luck6.innerHTML = response.wind_speed
          luck7.innerHTML = response.wind_degrees
          luck8.innerHTML = response.sunrise
          luck9.innerHTML = response.sunset
     })
     .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          chen1.innerHTML = response.temp
          chen2.innerHTML = response.feels_like
          chen3.innerHTML = response.humidity
          chen4.innerHTML = response.min_temp
          chen5.innerHTML = response.max_temp
          chen6.innerHTML = response.wind_speed
          chen7.innerHTML = response.wind_degrees
          chen8.innerHTML = response.sunrise
          chen9.innerHTML = response.sunset
     })
     .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneswar', options)
     .then(response => response.json())
     .then(response => {

          console.log(response)

          // cloud_pct.innerHTML = response.cloud_pct
          gn1.innerHTML = response.temp
          gn2.innerHTML = response.feels_like
          gn3.innerHTML = response.humidity
          gn4.innerHTML = response.min_temp
          gn5.innerHTML = response.max_temp
          gn6.innerHTML = response.wind_speed
          gn7.innerHTML = response.wind_degrees
          gn8.innerHTML = response.sunrise
          gn9.innerHTML = response.sunset
     })
     .catch(err => console.error(err));