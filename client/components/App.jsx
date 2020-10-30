import React from 'react'

import Header from './Header'
import Weather from './Weather'
import TaskInput from './TaskInput'

class App extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <Weather />
        <TaskInput />
      </>
    )
  }
}

export default App
