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
      <p>hi</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todos
  }
}

export default connect(mapStateToProps)(TaskDisplay)
