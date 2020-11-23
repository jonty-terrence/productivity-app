import { COLLECT_TASK, REMOVE_TASK } from '../actions'

export default function collectTitle (state = { tasks: [] }, action) {
  switch (action.type) {
    case COLLECT_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task !== action.task)
      }
    default:
      return state
  }
}