import React from "react";

const ChildComponent = ({ handleClick}) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <h2>Child Component {'React'}</h2>
      <button onClick={handleClick}>ChildClick</button>
    </div>
  );
};

export default React.memo(ChildComponent);
// export default ChildComponent;
