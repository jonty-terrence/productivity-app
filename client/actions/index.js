import { todosRef } from '../firebase'

export const COLLECT_TASKS = 'COLLECT_TASKS'
export const REMOVE_TASK = 'REMOVE_TASK'
export const ADD_TASK = 'ADD_TASK'

export function addTask (task) {
  return {
    type: 'ADD_TASK',
    task: task
  }
}

export const removeTask = (task) => async dispatch => {
  todosRef.child(task).remove()
}

export const fetchToDos = () => async dispatch => {
  todosRef.on('todos', snapshot => {
    dispatch({
      type: COLLECT_TASKS,
      payload: snapshot.val()
    })
  })
}
