import { todosRef } from '../firebase'

export const COLLECT_TASKS = 'COLLECT_TASKS'
export const REMOVE_TASK = 'REMOVE_TASK'

export const addTask = (task) => async dispatch => {
  todosRef.push().set(task)
}

export const removeTask = (task) => async dispatch => {
  todosRef.child(task).remove()
}

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: COLLECT_TASKS,
      payload: snapshot.val()
    })
  })
}
