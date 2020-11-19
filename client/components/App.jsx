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
          <p>Add tasks</p>
        </div>
        <div className="second-labels">
          <p>Mark completed</p>
        </div>
        <TaskDisplay />
        <TaskInput />
        <div className="footer">
          <p>App by Jonty</p>
          <p>Auckland, New Zealand</p>
        </div>
      </div>
    )
  }
}

export default App
