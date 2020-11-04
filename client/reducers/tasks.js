import { COLLECT_TASKS } from '../actions'

export default function collectTitle (state = { }, action) {
  switch (action.type) {
    case COLLECT_TASKS:
      return action.payload
    default:
      return state
  }
}
