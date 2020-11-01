import React from 'react'
import { connect } from 'react-redux'
import { db } from '../index'

import { removeTask } from '../actions'

let taskCount = 0

function handleClick (task, dispatch) {
  dispatch(removeTask(task))
}

class TaskDisplay extends React.Component {
  writeUserData () {
    db.database()
      .ref('/')
      .set(this.props)
    console.log('Data sent')
  }

  render () {
    return (
      this.props.tasks.tasks.map(task => {
        return (
          <>
            <button onClick={() => {
              handleClick(task, this.props.dispatch)
              this.writeUserData(this.props)
            }
            }>Complete</button>
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
