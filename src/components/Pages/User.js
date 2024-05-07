import { useState } from "react";
const User = (props) => {
  console.log("use Functional", props);
  const [count, useCount] = useState(0);
  const updateCount = () => {
    useCount(count + 1);
  };
  return (
    <div className="user-card">
      <h1>Count: {count} </h1>
      <button onClick={updateCount}>Count </button>
      <h2>Name: {props.name}</h2>
      <h3>Location: Somewhere</h3>
      <h4>Contact: something@gmail.com</h4>
    </div>
  );
};

export default User;
