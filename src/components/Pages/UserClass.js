import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>Name: Something</h2>
        <h3>Location: Somewhere</h3>
        <h4>Contact: something@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
/**
 * class - is a keyword
 * UserClass - is the name of the class
 to make UserClass class a component we use extends to Teact.Component
 This is the way, the react will know,that this is the react class based component.
 2. we will use render() inside the class comp, which will return the piece of JSX, which will be displayed on the UI.
 3. 
The diff btn class and functional based components

class based component ,is a class, which has render method, which returns some piece of JSX,
Functional component,is a function, which returns some piece of jsx.

the jsx will be converted into HTMl and rendered on the UI

React.Component is basically a class which is given to us by react.
here UserClass will inherit some properties from it.

*/
