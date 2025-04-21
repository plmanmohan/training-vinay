import { useState } from "react";

function User({ data, relation, shareCount }) {
  // console.log("props.data: ", data, "props.relation: ", relation);
const [num, setNum] = useState(1);
const [count, setCount] = useState(1);
  const renderUserdDetails = () => {
    return Object.keys(data).map((key) => {
        return <p key={key}> {key}: {data[key]} </p>
    })
  }
  const handleClick = () => {
    setNum(num + 1);
    setCount(num + 1);
    shareCount(num)
  };
  return (
    <div>
      <h1>User Component</h1>
      <h1>count: {num}</h1>
      <button onClick={handleClick}>Show/Hide</button>
      {renderUserdDetails()}
    </div>
  );
}
export default User;
