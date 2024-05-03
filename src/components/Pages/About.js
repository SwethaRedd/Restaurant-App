import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <h2>I am About Component</h2>
      <User name={"Something (Function)"} />
      <UserClass
        name={"Something (Class)"}
        location={"SomeLocation (Class)"}
        gmail={"something@gmail.com (Class)"}
      />
    </div>
  );
};

export default About;
/**
 *
 */
