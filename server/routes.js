
const express = require('express')
const request = require('superagent')

const router = express.Router()

const holidayListUrl = 'https://date.nager.at/api/v2/publicholidays/2020/NZ'

router.get('/', (req, res) => {
  request.get(holidayListUrl)
    .then(response => {
      console.log('server-side(in-terminal): ', response.body)
      res.json(response.body)
    })
    .catch(err => {
      res.status(500).send('DB Error' + err.message)
    })
})

module.exports = router
