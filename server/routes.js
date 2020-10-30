const express = require('express')
const request = require('superagent')
require('dotenv').config()

const router = express.Router()

const weatherUrl = `api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${process.env.WEATHER_TOKEN}`

router.get('/', (req, res) => {
  request.get(weatherUrl)
    .then(response => {
      console.log('server-side(in-terminal): ', response.body)
      res.json(response.body)
    })
    .catch(err => {
      res.status(500).send('DB Error' + err.message)
    })
})

module.exports = router
