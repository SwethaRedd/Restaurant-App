import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // super() is used to access its parent's props & methods
    // The super() function is the bridge that connects a child class component to its parent class constructor, allowing the child class to inherit all the goodness from the parent.
    // console.log("props==>", props);
    /***
     * state is basically a big whole object, contains state variables.
     *
     */

    this.state = {
      count: 0,
      count1: 1,
      count1: 2,
    };
  }

  render() {
    const { name, location, gmail } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {gmail}</h4>
        <h4>Count: {this.state.count} </h4>
        <h4>Count1: {count1} </h4>
        <h4>Count1: {count2} </h4>
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
 3. The diff btn class and functional based components

class based component ,is a class, which has render method, which returns some piece of JSX,
Functional component,is a function, which returns some piece of jsx.

the jsx will be converted into HTMl and rendered on the UI

4. React.Component is basically a class which is given to us by react.
here UserClass will inherit some properties from it.

5. import and export is same in the class/functional based components.
6. How to pass props in to this class component.

*/
