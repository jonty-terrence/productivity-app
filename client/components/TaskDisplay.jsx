import React from 'react'
import { connect } from 'react-redux'

class TaskDisplay extends React.Component {
  render () {
    return (
      <p>{this.props.task}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    task: state.tasks
  }
}

export default connect(mapStateToProps)(TaskDisplay)
