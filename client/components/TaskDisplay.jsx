import React from 'react'
import { connect } from 'react-redux'

import { removeTask } from '../actions'

let taskCount = 0

function handleClick (task, dispatch) {
  dispatch(removeTask(task))
}

class TaskDisplay extends React.Component {
  render () {
    return (
      <div className="task-display">
        { this.props.tasks.tasks.map(task => {
          return (
            <div className="task-box" key={taskCount++}>
              <div className="task-text">
                <h3>{task}</h3>
                <p>Mark the task as completed when you are done</p>
              </div>
              <div className="button-sect">
                <a href="#" className="complete-button" onClick={() => handleClick(task, this.props.dispatch)}>Complete</a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskDisplay)
