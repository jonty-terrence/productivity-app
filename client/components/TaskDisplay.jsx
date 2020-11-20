import React from 'react'
import { connect } from 'react-redux'

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
    return (
      // this.props.tasks.map(task => {
      //   return (
      //     <>
      //       <button onClick={() => {
      //         handleClick(task, this.props.dispatch)
      //         this.writeUserData('yes')
      //       }
      //       }>Complete</button>
      //       <p key={taskCount++}>{task}</p>
      //     </>
      //   )
      // })
      <div className="task-display">
        <div className="task-box">
          <div className="task-text">
            <h3>This is the task name</h3>
            <p>This is the date added</p>
          </div>
          <div className="button-sect">
            <a href="#" className="complete-button">Complete</a>
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
