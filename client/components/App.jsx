import React from 'react'

import Header from './Header'
import Weather from './Weather'
import TaskInput from './TaskInput'
import TaskDisplay from './TaskDisplay'

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <Header/>
        <Weather />
        <div className="labels">
          labels
        </div>
        <div className="second-labels">
          Second labels
        </div>
        <TaskDisplay />
        <TaskInput />
        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
}

export default App
