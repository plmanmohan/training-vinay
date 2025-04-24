import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./userSlice";

const UserManager = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };
  const handleAddUser = () => {
    dispatch(setUser(username));
    setUsername("");
  };
  return (
    <div>
      <h1>UserManager</h1>
      <input
        type="text"
        placeholder="User"  
        onChange={handleOnChange}
        value={username}
      />
      <button aria-label="Close" onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserManager;
