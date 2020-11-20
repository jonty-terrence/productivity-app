import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../actions'

function handleChange (dispatch) {
  const taskInput = document.getElementById('task').value
  dispatch(addTask(taskInput))
  document.getElementById('task').value = ''
}

class TaskInput extends React.Component {
  render () {
    return (
      <div className="input-sect">
        <div className="input-title">
          <h2>What would you like to get done?</h2>
        </div>
        <div className="input-form">
          <input
            type="text"
            id="task"
            className="field"
            placeholder="Add a new task to your to-do list"
          >
          </input>
          <button onClick={e => handleChange(this.props.dispatch)}>Submit</button>
        </div>
        <div className="image-box">
          <img id="cactus" src="cactus.jpg" alt="cactus"></img>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.task
  }
}

export default connect(mapStateToProps)(TaskInput)
