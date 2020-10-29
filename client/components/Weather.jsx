import React from 'react'

import request from 'superagent'

const holidaysListUrl = 'http://localhost:3000/api/v2/publicholidays/'

class Weather extends React.Component {
    state = {
      weather: 'Not yet checked'
    }

    componentDidMount () {
      console.log('component mounted')
      request.get(holidaysListUrl)
        .then(res => {
          console.log('client-side(in console): ', res.body)
          this.setState({ weather: res.body })
        })
    }

    render () {
      return (
        <>
          <h1>The Weather today is</h1>
        </>
      )
    }
}

export default Weather
