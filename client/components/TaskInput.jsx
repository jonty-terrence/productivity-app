import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../actions'

function handleChange (dispatch) {
  let taskInput = document.getElementById('task').value
  dispatch(addTask(taskInput))
  document.getElementById('task').value = ''
}

class TaskInput extends React.Component {
  render () {
    return (
      <div>
        <input
          type="text"
          id="task"
          className="field"
          placeholder="Add a new task to your to-do list"
        >
        </input>
        <button onClick={e => handleChange(this.props.dispatch)}>Submit</button>
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
