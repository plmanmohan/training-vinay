import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./taskSlice";

const TaskManagerRedux = () => {
  const [task, setTask] = useState("");
  const taskList = useSelector((state) => state.taskList.taskList);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    console.log("handleOnChange", e.target.value);
    setTask(e.target.value);
  };
  const handleAddTask = () => {
    dispatch(addTask(task));
    setTask("");
  };
  const renderTasks = () => {
    console.log("renderTasks", taskList);
    return taskList.map((task, index) => {
      return (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => dispatch(removeTask(task))}>Remove</button>
        </div>
      );
    });
  }
  return (
    <div>
      <h1>TaskManagerRedux</h1>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={handleOnChange}
        value={task}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {renderTasks()}
    </div>
  );
};

export default TaskManagerRedux;
