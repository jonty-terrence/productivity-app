import React from 'react'
import { connect } from 'react-redux'

let taskCount = 0

function handleClick (task) {
  console.log(task)
}

class TaskDisplay extends React.Component {
  render () {
    return (
      this.props.tasks.map(task => {
        return (
          <>
            <button onClick={() => handleClick(task)}>Complete</button>
            <p key={taskCount++}>{task}</p>
          </>
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskDisplay)
