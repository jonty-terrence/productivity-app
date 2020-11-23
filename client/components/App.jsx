import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Weather from './Weather'
import TaskInput from './TaskInput'
import TaskDisplay from './TaskDisplay'
import TaskPlaceholder from './TaskPlaceholder'

let renderedComponent

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
    if (this.props.tasks) {
      renderedComponent = <TaskDisplay />
    } else {
      renderedComponent = <TaskPlaceholder />
    }
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
        {renderedComponent}
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

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
