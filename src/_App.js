import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Customer from "./components/Customer";
import Teacher from "./components/Teacher";
import { useState } from "react";
import MyBook from "./components/MyBook";
import LiveWatch from "./components/LiveWatch";

const userObj = [{
  name: "Manamohan",
  // age: 25,
  location: "India",  
  // hobbies: ["reading", "coding", "gaming"],
},
{
  name: "Vinay",
  age: 21,
  location: "UK",  
  hobbies: ["reading", "coding", "gaming"],
},
{
  name: "Shradha",
  age: 20,
  location: "USA",  
  hobbies: ["reading", "coding", "gaming"],
  extrahobbies: ["danching", "singing", "speaking"],
}];
const str = 'Manamohan'
const str2 = `Hello ${str}`
const renderUsers = () => {
  return userObj.map((user, index) => {
    return <User key={`${index}${user.name}`} data={user} relation='son' />;
  });
};

function App() {
  const [count, setCount] = useState(0);
  let myCount =0;
  const shareCount = (num) => {
    myCount = num;
    // console.log("myCount: ", myCount, 'num: ', num);
    setCount(num);
  }

  const handleClick = () => {
    setCount(count + 1);

  };
  return (
      <div className="App">
        {/* <h1>Headede</h1>
        <p>dsbofhewo sdfhewfw kbhohwe</p> */}
        {/* <User data={userObj} relation='son' /> */}
        {/* {renderUsers()} */}
        {/* <Teacher num={count}/> */}
        {/* <User data={userObj[0]} relation='son' shareCount={shareCount}/> */}
        {/* <Customer count={count}/> */}
        <button onClick={handleClick}>Increase counter {count}</button>
        {/* {count <= 3 && <MyBook book Color={'Blue'}/>} */}
        {count <= 5 ? <LiveWatch /> : count >= 8 ? <LiveWatch /> : null}
      </div>
  );
}

export default App;
