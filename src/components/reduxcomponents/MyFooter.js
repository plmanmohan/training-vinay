import { useSelector } from 'react-redux';
const MyFooter = () => {    
const taskList = useSelector((state) => state.taskList.taskList);
const user = useSelector((state) => state.user.user);

const renderTasks = () => {
    console.log("renderTasks", taskList);
    return taskList.map((task, index) => {
      return (
        <div key={index}>
          <span>{task}</span>
        </div>
      );
    });
  }
  return (
    <div className="footer">
      <div className="container">
        <h1>Welcome {user}</h1>
        <p className="text-muted">My Footer</p>
        {renderTasks()}
      </div>
    </div>
  );
}

export default MyFooter;