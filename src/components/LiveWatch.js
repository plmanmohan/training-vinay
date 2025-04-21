import { useEffect, useState } from "react";

const LiveWatch = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  // const timer = setInterval(() => {
  //        // setTime(new Date().toLocaleTimeString());
  //     }, 1000);

  // console.log("COmponent renders: ");
  useEffect(() => {
    console.log("componentDidMount: ");
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setCount(count + 1);
    }, 1000);

    

    return () => {
      console.log("componentWillUnmount: ");
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    console.log("componentDidUpdate: ", time);
    if (show) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [show, time]);

  return (
    <div>
      <h1>Live Watch</h1>
      <p>Watch live events here! time: {time}</p>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {<p>SHow commponent {show && count}</p>}
    </div>
  );
};

export default LiveWatch;
