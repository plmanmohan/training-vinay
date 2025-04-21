import { useEffect, useState, useRef, forwardRef } from "react";

const LoginPage = ({ onLogin }, ref) => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  // const inputRef =useRef(null);

  // const focusInput = () => {
  //   console.log("Focusing input field: ", inputRef.current);
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // };
  // focusInput();
  useEffect(() => {
    console.log("LoginPage mounted");
    // focusInput();
    return () => {
      setPassword("");
      setUid("");
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setUid("");
    onLogin();
  };
  const handleOnChange = (e) => {
    console.log(e.target.id + " changed to " + e.target.value);
    if (e.target.id === "uid") {
      setUid(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          id="uid"
          type="text"
          placeholder="User name"
          onChange={handleOnChange}
          value={uid}
        />
        <br />
        <input
          id="password"
          type="password"
          placeholder="password"
          onChange={handleOnChange}
          value={password}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default forwardRef(LoginPage);
