import { useState } from "react";
import { addTask, removeTask } from "./actionCreater";
import { useReducer } from "react";
import reducer from "./reducer";

const TaskManager = () => {
  const [state, dispatch] = useReducer(reducer);

  const [task, setTask] = useState("");

  const handleAddTask = () => {
    const addaction = addTask(task);
    dispatch(addaction);
    setTask("");
  };
  const handleRemove = (item) => {
    console.log("handleRemove", item);
    const removeAction = removeTask(item);
    dispatch(removeAction);
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const renderList = () => {
    return state?.taskList
      ? state.taskList.map((item) => {
          return (
            <div>
              <div key={item}>{item}</div>
              <button onClick={() => handleRemove(item)}>Remove Task</button>
            </div>
          );
        })
      : null;
  };
  return (
    <>
      <div>Task Manager </div>
      <div>Task</div>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={handleChange}
        value={task}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <h3>TaskList: </h3>
      <ul>{renderList()}</ul>
    </>
  );
};

export default TaskManager;
