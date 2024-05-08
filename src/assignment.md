# Chapter 06 - Exploring the world

●\*\*\*\* What is a Microservice?

●\*\*\*\* What is Monolith architecture?
● What is the difference between Monolith and Microservice?
● Why do we need a useEffect Hook?
● What is Optional Chaining?

???

● What is Shimmer UI?
is a library, that uses a gradient animation to create a shimmer effect, mimicking content while it's loading. It is a dynnamic & customizable placeholder content solution designed for react and native.
● What is the difference between JS expression and JS statement

● What is Conditional Rendering, explain with a code example
Rendering on the conditional basis is, conditional rendering.
Ex:  
 if (listOfRestaurants.length === 0) {
return <Shimmer />;
}
● Why do we even need state variables?
if we use normal JS varibale and used the handler function to update the variable, it will update the variable but the UI won't be updated. Coz the ui is not rendered.we some how need to refresh the page to update the latest value. So basically JS variables won;t work in such cases.

If we want to make our component dynamic,
something should be there to update the local state, this is where the useState comes into the picture.

useState comes as a named import from react.

# const [initState, setInitState] = useState(initVal);

this behaves like a normal JS variable.

as soon as you call the setInitState(), it will update the initState value with the new value and render that component and finds the diff between the older version and the newer version, & updates on the UI.

● What is CORS?

● What is async and await?
● What is the use of `const json = await data.json();` in getRestaurants()

# 6: Coding Assignment :

// State Variable - Super Powerful Variable
// Hook is normal JS function, given by react , function has logic behind the scenes.

// const [state, setstate] = useState(initialState);
const [listOfRestaurants, setListOfRestaurants] = useState(resList);

/\*
const [listOfRestaurants, setListOfRestaurants] = useState(resList);
is something similar to this below code- which looks like regular JS

const arr = useState(resList);
const [listOfRestaurants, setListOfRestaurants] = arr // array destructuring
const lisOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];

\*/

● Play with the useEffect Hook to see when it is called?(before or after render)
● Play with dependency array in useEffect Hook
● Play with the developer console by putting a debugger in render and useEffect
● Call an actual API to get data
● Handle Error in your API call
● Build Shimmer UI when data in not loaded
● Render your UI with actual API data
● Make Search functionality work
● Make a Login Logout button which toggles with a state

# Chapter 05 - Let's get Hooked!

**Assignment**
● What is the difference between Named Export, Default export and \* as export?
Named exports can be multiple in single file, default exports are one for a file.
Named exports can be imported as
imort {img} from './constants';
Default exports can be imported as component
import component from './compoents';
● What is the importance of config.js file

● What are React Hooks?
Recat hooks are normal JS functions, we have 2 most used hooks in the react.
useState() : is used to generate state variables in React.

- we import the useState() from the React
  and this useState is like a normal JS object, it
  const [state, setstate] = useState(initialState);

state is the current value,
setstate function is used to update the DOM
initialState will be the initial state value.

useEffect()

Reconcilation algorithm: After react Version V16, this reconcilation algorithm is know as React Fiber, it has incremental rendering
Diff Algorithm

Whenever state variable gets updated, react triggers a reconcilation cycle(i.e,.re-renders the component).

---

- ***

  ● Why do we need a useState Hook?

* Reconcilation Algorithm: React Fiber :
  https://github.com/acdlite/react-fiber-architecture

Coding Assignment:
● Clean up your code
● Create a Folder Structure for your app
● Make different files for each Components
● Create a config file
● Use all types of import and export
● Create a Search Box in your App
● Use useState to create a variable and bind it to the input box
● Try to make your search bar work
**References**
● Code Link - https://bitbucket.org/namastedev/namaste-react-live/src/master/

======
_●_ _●_ _●_ _●_ Chapter 07 - Finding the Path _●_ _●_ _●_ _●_

#### Assignment

_●_ What are various ways to add images into our App? Explain with code examples
_●_ What would happen if we do console.log(useState())?
_●_ How will useEffect behave if we don't add a dependency array ?
useEffect:

// If no dependency array => useEffect is called on every render.
// If dependency array is empty = [] => useEffect is called on initial render(just once)
// if dependency array is [btnHandle] => useEffect is called everytume btnHandle is updated.

_●_ What is SPA?
Single Page Application - Single page application will have single HTML page , which loads once and the part of the application will be rendered when something is changed or updated.

*●*What is difference between Client Side Routing and Server Side Routing?
Client side routing doesn't make any network calls to load the page, isntead it loads the whole page on the initial load and then it just shows the loaded content based on the route.
And Server side routing will make an call to the server and then loads the data on page.

#### Coding Assignment:

● Add Shimmer Effect without installing a library {Done}
● Install react-router-dom
● Create a appRouter and Provide it to the app
● Create a Home, About, Contact Page with Link (use child routes)
● Make a Error page for routing errors
● Create a Restaurant Page with dynamic restaurant ID
● (Extra) - Create a login Page using Formik Library

- Resources: \*
  ● React Router DOM - https://reactrouter.com/en/main
  ● Client Side Routing - https://reactrouter.com/en/main/start/overview
  ● Formik - https://formik.org/
  ======

  #####

  **. react-router-dom**
  Whenever you have to develop routes, we need to create Routing configuration.
  You import this this {createBrowserRouter} named config from the "react-router-dom".
  and react-router-dom has this RouterProvider which will provide the routing config to our App.So we need to import that from teh react-router-dom

  Ex:
  import {createBrowserRouter, RouterProvider} from "react-router-dom"
  // importing from react-router-dom

// creating the routing cofiguration
const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
errorElement: <Error />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
]);

- in createBrowserRouter, we have children property,which holds all the different child routes, which will be loaded based on the path.

children: [
{
path: "/",
element: <Body />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
],

// passing the created routing config to the Router Provider, so that all the given paths will be rendered accordingly.

root.render(<RouterProvider router={appRouter} />);

/\*\*

- useRouterError() hook is provided by the react-router-dom.
- By using this , we can get the detailed error object.
  \*/

* react-router-dom also has **.Outlet** , this <Outlet /> will be filled with the children, according to the path on what page we are. (i.e,. created under createBrowserRouter), so that we can reuse header and footer like pages throgh out the site.

  Ex: so lets say we are on /about path, which is in the children list of paths, this will go and fill the <Outlet/>(behind the scenes this <Outlet /> will be replaced by the <About/>, so basically, you don;t even see the <Outlet /> in the UI element) ,so now the header and footer are in tact with about page.
  basically, it will load all the children pages according to the path along with the default pages like header and footer. or it the children pages will be intact with the default pages.

  **.Link**
  import {Link} from 'react-router-dom';
  it acts similar to the anchor tag but the it won;t render the full page, & also the syntax is difference.
  <Link to="">Contact </Link>
  ## So we can also use the anchor tag behind the scenes, so why <Link/> ????? 
  <a href="">contact </a> but when we use the <a href=""/> tag , the whole page will re render,
  so this  */ creates the load on the page.* instead we can use <Link to="" /> from react-router-dom, it just loads the page without re rendering the page,  this  */ reduces the load on the page.*

## 2 types of routing in web Apps:

_/Client Side Routing_ : in the client side routing, basically the page is already loaded fully with all it's links and content, so when you click on any link , per say , if you click on about , it just loads the about page, it won't make any external calls to any networks. (similar concept of single page application, basically it renders the whole page and then just loads the content according to the path it selected.)

_/Server Side Routing_: is when you click on a link per say on about url, it makes the calls to the page and fethces the html of that page and loads it on to the UI.
like when you use anchor tag, it re renders the entire page.

## Dynamic Routing

https://www.swiggy.com/dapi/menu/pl?page-type-REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425

add the dynamic path when you createBrowserRoute config- path: and use that resId and pass it over to as a param.
"https://www.swiggy.com/dapi/menu/pl?page-type-REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId;

So that the resId will be passed dynamically here.

Load dynamic content

1. create Restaurant Menu Page
2. add the route

_●_ _●_ _●_ _●_ Chapter 08 - Let's Get Classy _●_ _●_ _●_ _●_

#### Assignment

_●_ How do you create Nested Routes react-router-dom cofiguration.

you have to pass an array of objects (path and element keys with values) to the children element in the default route, when you create the router config.
_●_ Read about createHashRouter, createMemoryRouter from React Router docs.

_●_ What is the order of life cycle method calls in Class Based Components

_●_ Why do we use componentDidMount?
_●_ Why do we use componentWillUnmount? Show with example
_●_ (Research) Why do we use super(props) in constructor?
_●_ (Research) Why can't we have the callback function of useEffect async?

## ========

_/Class Based Component_
Is the older way of creating a components.
We don't have to use this class based components now.

1. It explains, components life cycle, & how the component renders on to the page? & the beauty of the react etc..!!

## Class based Components:

class keyword is used for the className which extends the React.component.

class UserClassComp extends React.Component{ // _class_ keyword is used for the className which _extends_ the React.component.

constructor(props){
super(props);
// super() is used to access its parent's props & methods
// The super() function is the bridge that connects a child class component to its parent class constructor, allowing the child class to inherit all the goodness from the parent.
}

render() {
return (

<div>
<h1>Name:{this.props.name} </h1>
</div>
)
}

}

- Class instance : when we are loading a class based component on to the web page, means we are creating a new instance of the class
- Whenever you're creating a instance of the class, this constructor is called.
- # State variable is created whenever a class instance is created

# Creating Multiple state varibales in:

Class based component: is to add the state variables in a single object.
this.state = {
count: 0,
count1: 1,
count1: 2,
}
functional components: is to add multiple hooks in it.
const [count] = useState(0);
const [count1] = useState(1);
=====

# Updating the state variables in :

ClassBased Components:

## NEVER EVER UPDATE STATE VARIABLES DIRECTLY

We can use, this.setState() method, and i can pass the logic as an object (this object will have the updated value of your state varibale) to the setState method like this.

this.setState({
count: count + 1; // here we're taking the count and modify the count.
})

\*\* whenever the state variable is updated the react will re-render the component.

# Functional Components:

we use setState to update state variables.

# React Life Cycle Methods:

as soon as it goes to the component, it creates an instance of that class. Means, it instantiated, or the class is been called.

When the class loads(means, i am creating a new instanc eof this class), the first thing is the constructor is called.
and then the render() is called.

When in Update state,
first the update state is called, and then the render will be called.

Mounting :

# initialization:

# constructor();

# render():

once the class based component is mounted on to the DOM successfully, then this

# componentDidMount: is called,

is used, to make API calls (for side effects)

# Why the API calls are made inside the componentDidMount() ?

As soon as the life cycle starts, the constructor will be called, & then the render() method will be called, so that the page will be loaded on to the DOM as soon as possible, and after that the react checks this componentDidMount() method & will be called so that it fetches the API data and then fills that data on to the DOM instead of waiting for the API to fetch its data for the initial load.
It just loads whatever it has on it's render() inititally and then go for the componentDidMount() and fetches the data and fills it on to the DOM.

# Make an API call inside the calss based component.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Render Phase:

it has Constructor and render in this phase

# Commit phase: in this phase react updates the DOM and then the componentDidMount is called.

/\*\*

- Parent Constructor
- Parent render

So lets say ,a parent component has 2 Children, so the react will optimize this and it will batch the render phase for these two children, and then the commit phase will be batched together.

But why is react batching the render phase & commit phase for all it's children?

Once the commit phase starts, react tries to update the DOM and DOM manipulations are very expensive, so react tries to batch it's children for render phase and the commit phase. So that it will reduce the DOM manipulations, and make all it's children's manipulations in a single batch.

    - First Child Constructor
    - First Child render

    - Second Child Constructor
    - Second Child render

    <DOM Updated - IN A SINGLE BATCH>

    - First Child componentDidMount
    - Second Child componentDidMount

\*/
Update:
when the state gets updated, then the react render() will be called and the new changes will be loaded on the UI. And then the componnentDidUpdated() will be called.
componentDidUpdate: This method is called after the component has been re-rendered due to state or props changes. It's commonly used for performing additional side effects or updating the DOM in response to state changes. It's important to check if the state or props have actually changed before performing any expensive operations to avoid unnecessary re-renders.

UnMounting:
componentWillUnmount() :

/\*\*
------- MOUNTING -----
Constructor (with initial state values)
Render (with initial values)
loaded on the DOM <HTML initial values />
Component Did Mount  
 makes <API call> side effects
<this.setState> --> State varibale is updated

-------- UPDATE -------
Render (with API data)

<HTML (new API data)>
Component Did Update
<HTML (new API data)>

-------- UNMOUNTING ----------

# componentWillUnmount():

is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

\*\*\*/

=========================
Coding Assignment:
● Create a Class Based Component
○ Create 2 class based child components
○ Pass props from Parent to child
○ Create a constructor
○ Create a state variable inside child
○ Use this.setState to update it
○ What if there are multiple state variables?
○ Write a console.log for each lifecycle method
○ Play with the console logs to find out the correct order of their execution
● Create interval inside compo
