const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count = {count} </h1>
      <h1>Count = {count1} </h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Somewhere</h3>
      <h4>Contact: something@gmail.com</h4>
    </div>
  );
};

export default User;
