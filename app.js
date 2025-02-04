const request = require("request")
const dotenv = require("dotenv").config()

const address = process.argv[2]

const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`

if (!address) {
  return console.log("Please enter the name of the city")
}

request(url, (error, response, body) => {
 const data = JSON.parse(body)
 console.log(`It's currently ${data.main.temp} dgree c outside.`)
})