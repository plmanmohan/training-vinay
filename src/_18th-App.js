import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/ContactUs";
import Profile from "./components/pages/Profile";
import LoginPage from "./components/pages/LoginPage";
import { useState, useRef, useEffect } from "react";
import DashBoard from "./components/pages/DashBoard";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import LoginClassComponent from "./components/LoginClassComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log("Focusing input field in App: ", inputRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onLogin = () => {
    setIsLoggedIn(true);
  };
  const onLogout = () => {
    setIsLoggedIn(false);
  };
  useEffect(() => {
    console.log("App mounted");
    focusInput();
  }, []);

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button onClick={onLogout}>LogOut</button>
              ) : (
                <Link to="/loginpage">Login</Link>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          {/* <Route path='/loginpage' element={<LoginPage onLogin={onLogin}/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <LoginPage ref={inputRef} onLogin={onLogin} logout={onLogout}/> */}
      <LoginClassComponent />
    </>
  );
}
export default App;


