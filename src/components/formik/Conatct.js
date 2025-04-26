import { useState } from "react";

const Conatct = () => {
  const [uid, setUid] = useState("");
  const handleSubmit = (e) => {}


  const handleOnChange = (e) => {
    e.preventDefault();
    setUid(e.target.value);
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input id="uid" type="text" onChange={handleOnChange} value={uid} />
    </form>
  );
};


export default Conatct;