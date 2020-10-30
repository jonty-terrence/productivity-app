import { COLLECT_TASK } from '../actions'

export default function collectTitle (state = null, action) {
  switch (action.type) {
    case COLLECT_TASK:
      return action.task
    default:
      return state
  }
}
