import { COLLECT_TASKS } from '../actions'

export default function collectTitle (state = { tasks: [] }, action) {
  switch (action.type) {
    case COLLECT_TASKS:
      return action.tasks
    default:
      return state
  }
}
