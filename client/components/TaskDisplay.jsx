import React from 'react'
import { connect } from 'react-redux'

import { removeTask } from '../actions'

let taskCount = 0

function handleClick (task, dispatch) {
  console.log(task)
  dispatch(removeTask(task))
}

class TaskDisplay extends React.Component {
  render () {
    console.log(this.props)
    return (
      this.props.tasks.tasks.map(task => {
        return (
          <>
            <button onClick={() => handleClick(task, this.props.dispatch)}>Complete</button>
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
