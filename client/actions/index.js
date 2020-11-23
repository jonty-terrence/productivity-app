export const COLLECT_TASK = 'COLLECT_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

export const collectTask = (task) => {
  return {
    type: 'COLLECT_TASK',
    task: task
  }
}

export const removeTask = (task) => {
  return {
    type: 'REMOVE_TASK',
    task: task
  }
}
