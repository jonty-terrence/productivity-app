export const COLLECT_TASK = 'COLLECT_TASK'

export const collectTask = (task) => {
  return {
    type: 'COLLECT_TASK',
    task: task
  }
}
