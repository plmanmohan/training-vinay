const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
}
const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: id,
  };
}
const updateTask = (task) => {
  return {
    type: "UPDATE_TASK",
    payload: task,
  };
}

export {addTask, removeTask, updateTask};