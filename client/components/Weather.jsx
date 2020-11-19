import React from 'react'

import request from 'superagent'

const weatherUrl = 'http://localhost:3000/api/v2/weather/'

class Weather extends React.Component {
    state = {
      weather: 'Not yet checked'
    }

    componentDidMount () {
      request.get(weatherUrl)
        .then(res => {
          this.setState({ weather: res.body.weather })
        })
    }

    render () {
      return (
        <div className="weather-sect">
          <div className="weather-box">
            <h1>The Weather today is {this.state.weather[0].main}</h1>
          </div>
        </div>
      )
    }
}

export default Weather
