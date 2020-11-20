import React from 'react'
import { connect } from 'react-redux'
import { todosRef } from '../firebase'

import { removeTask } from '../actions'

const taskCount = 0

function handleClick (task, dispatch) {
  dispatch(removeTask(task))
}

class TaskDisplay extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }

  componentDidUpdate () {
    this.writeUserData(this.props.tasks)
    this.retrieveData()
  }

  render () {
    todosRef.once('value').then(function (snapshot) {
      
    })
    return (
      <div className="task-display">
        <div className="task-box">
          <div className="task-text">
            <h3>This is the task name</h3>
            <p>This is the date added</p>
          </div>
          <div className="button-sect">
            <a href="#" className="complete-button" onClick={() => handleClick(task.name)}>Complete</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todos
  }
}

export default connect(mapStateToProps)(TaskDisplay)
