import React from 'react'

import Header from './Header'
import Weather from './Weather'
import TaskInput from './TaskInput'
import TaskDisplay from './TaskDisplay'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div className="main-container">
        <Header/>
        <Weather />
        <div className="labels">
          <p>Mark completed</p>

        </div>
        <div className="second-labels">
          <p>Add tasks</p>
        </div>
        <TaskDisplay />
        <TaskInput />
        <div className="footer">
          <p>App by Jonty</p>
          <p>Auckland, New Zealand</p>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    )
  }
}

export default App
