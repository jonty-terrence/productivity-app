import React from 'react'
import { connect } from 'react-redux'

let count = 0

class TaskDisplay extends React.Component {
  render () {
    return (
      this.props.task.map(task => {
        return (
          <p key={count++}>{task}</p>
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    task: state.tasks
  }
}

export default connect(mapStateToProps)(TaskDisplay)
