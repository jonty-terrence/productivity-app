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
          console.log('client-side(in console): ', res.body)
          this.setState({ weather: res.body.weather })
          console.log(this.state)
        })
    }

    render () {
      return (
        <>
          <h1>The Weather today is {this.state.weather[0].main}</h1>
        </>
      )
    }
}

export default Weather
