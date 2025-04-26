import { useCallback, useEffect, useMemo, useState } from "react";
// import ChildComponent from "./components/memo/ChildComponent";
import Card from "./components/memo/Card";

function slowFunction(num) {
  console.log("slowFunction called");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  const [name, setName] = useState('React');

  const result = useMemo(() => slowFunction(input), [input]);
  console.log("Result: ", result);
  const handleIncrease = () => {
    if(count === 5) {
      setName('Angular');
    }
    setCount(count + 1);
  };
  const handleClick = useCallback(() => {
    console.log("Button clicked", name);
  }, [name]);


  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))} />

      <button onClick={handleIncrease}>Increase</button>
      {/* <ChildComponent handleClick={handleClick}/> */}
      {/* <ChildComponent name={name} handleClick={handleClick}/> */}
      <Card >
        <img src="https://picsum.photos/200/300" alt="Placeholder" />
        <h2>Card Component</h2>
        <p>This is a card component.</p>
      </Card>
    </div>
  );
}

export default App;
