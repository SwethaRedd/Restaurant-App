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
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:
          "https://st4.depositphotos.com/1001411/21420/i/1600/depositphotos_214208590-stock-photo-beautiful-pink-flowers-white-background.jpg",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount ");
    // const data = await fetch("https://api.github.com/users/swethareddy");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log("json", json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location, login, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" />
        <h2> Name: {name} </h2>
        <h3> Location: {location}</h3>
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
