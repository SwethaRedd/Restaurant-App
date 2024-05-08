import { Component } from "react";
import UserClass from "./UserClass";

// import React from "react";
// class About extends React.Component {
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
    // const API = fetch("https://api.github.com/users/akshaymarch7");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="about">
        <h1>About Class Based Component</h1>
        <h2>I am About Component</h2>
        <UserClass name={"First (Class)"} location={"SomeLocation"} />
      </div>
    );
  }
}
export default About;
/**
 - Parent Constructor
 - Parent render

 So here in this example, About has 2 Children, so the react will optimize this 
 and it will batch the render phase for these two children, and then the commit phase will be batched together.
 But why is react batching the render phase for all it's children?

 Once the commit phase starts, react tries to update the DOM and DOM manipulations are very expensive, so react tries to batch it's children for render phase and the commit phase.


    - First Child Constructor
    - First Child render
    
    - Second Child Constructor
    - Second Child render

    <DOM Updated - IN A SINGLE BATCH>
    
    - First Child componentDidMount
    - Second Child componentDidMount
*/

// import User from "./User";
// import UserClass from "./UserClass";
// const About = () => {
//   console.log("Parent");
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h2>I am About Component</h2>
//       {/* <User name={"Something (Function)"} /> */}
//       <UserClass
//         name={"Something (Class)"}
//         location={"SomeLocation (Class)"}
//         gmail={"something@gmail.com (Class)"}
//       />
//     </div>
//   );
// };

// export default About;
/**
 *
 */
