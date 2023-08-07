const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '690f248b68msh82862e9a04d0de3p129b66jsndff7db7b42fa',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
}
const getWeather = (city) => {
  cityName.innerHTML = city
  console.log(city)
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      // data control...

      cloud_pct.innerHTML = response.cloud_pct
      cloud.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp1.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
    })
    .catch((error) => {
      console.log(error)
    })
}
submitdata.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather(city.value)
})
submitdata1.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather(city.value)
})
getWeather('Delhi')
