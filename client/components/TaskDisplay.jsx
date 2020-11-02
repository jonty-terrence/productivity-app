import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { removeTask } from '../actions'

let taskCount = 0

function handleClick (task, dispatch, writeData) {
  dispatch(removeTask(task))
  writeData(task)
}

class TaskDisplay extends React.Component {
    componentDidMount () {
        this.writeUserData('hello')
    }
  
    writeUserData (task) {
      firebase.database()
        .ref('/')
        .set(task)
      console.log('Data sent')
    }
  render () {
    return (
      this.props.tasks.tasks.map(task => {
        return (
          <>
            <button onClick={() => {
              handleClick(task, this.props.dispatch, this.writeUserData)
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
