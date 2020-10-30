import React from 'react'
import { connect } from 'react-redux'

import collectTask from '../actions'

function handleChange (e, dispatch) {
  dispatch(collectTask(e.target.value))
}

class TaskInput extends React.Component {
  render () {
    return (
      <div>
        <input
          type="text"
          id="title"
          className="title-input"
          placeholder="Add a new task to your to-do list"
          onChange={e => handleChange(e, this.props.dispatch)}
        >
        </input>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps)(TaskInput)
