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
        { this.props.tasks.map(task => {
          return (
            <div className="task-box" key={taskCount++}>
              <div className="task-text">
                <h3>{task}</h3>
                <p>Enter some tasks to get started</p>
              </div>
              <div className="button-sect">
                <a href="#" className="complete-button" onClick={() => handleClick(task.name)}>Complete</a>
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
