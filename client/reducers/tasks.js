import { COLLECT_TASK } from '../actions'

export default function collectTitle (state = [], action) {
  switch (action.type) {
    case COLLECT_TASK:
      return [
        ...state,
        action.task
      ]
    default:
      return state
  }
}
