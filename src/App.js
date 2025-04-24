import MyFooter from "./components/reduxcomponents/MyFooter";
import TaskManagerRedux from "./components/reduxcomponents/TaskManagerRedux";
import UserManager from "./components/reduxcomponents/UserManager";

function App() {
  return (
    <div className="App">
      <TaskManagerRedux />
      <UserManager />
      <MyFooter />
    </div>
  );
}

export default App;
