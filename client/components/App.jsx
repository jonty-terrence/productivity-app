import React from 'react'

import Header from './Header'
import Weather from './Weather'
import TaskInput from './TaskInput'
import TaskDisplay from './TaskDisplay'

class App extends React.Component {
render () {
    return (
      <>
        <Header/>
        <Weather />
        <TaskDisplay />
        <TaskInput />
      </>
    )
  }
}

export default App
