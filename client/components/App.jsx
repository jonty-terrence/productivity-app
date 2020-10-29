import React from 'react'

import Header from './Header'
import Weather from './Weather'

class App extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <Weather />
      </>
    )
  }
}

export default App
