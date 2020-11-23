import React from 'react'

class TaskPlaceholder extends React.Component {
  render () {
    return (
      <div className="task-display">
        <div className="task-box">
          <div className="task-text">
            <h3>Your Tasks will display here</h3>
            <p>Enter some tasks to get started</p>
          </div>
          <div className="button-sect">
            <a href="#" className="complete-button">Complete</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskPlaceholder
