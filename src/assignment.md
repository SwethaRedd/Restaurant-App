# Chapter 06 - Exploring the world

# ●\*\*\*\* What is a Microservice?

# ●\*\*\*\* What is Monolith architecture?

● What is the difference between Monolith and Microservice?
● Why do we need a useEffect Hook?
● What is Optional Chaining?

???

# What is Shimmer UI?

is a library, that uses a gradient animation to create a shimmer effect, mimicking content while it's loading. It is a dynnamic & customizable placeholder content solution designed for react and native.

# What is the difference between JS expression and JS statement

# What is Conditional Rendering, explain with a code example

Rendering something on the conditional basis is, conditional rendering.
Ex:  
 if (listOfRestaurants.length === 0) {
return <Shimmer />;
}

# Why do we even need state variables?

if we use normal JS varibale and used a handler function to update the variable, it will update the variable but the UI won't be updated. Coz the ui is not rendered.we some how need to refresh the page to update the latest value. So basically JS variables won't work in such cases.

If we want to make our component dynamic,
something should be there to update the local state, this is where the useState comes into the picture.

useState comes as a named import from react.

# const [initState, setInitState] = useState(initVal);

this behaves like a normal JS variable.

as soon as you call the setInitState(), it will update the initState value with the new value and render that component & finds the diff between the older version and the newer version, & updates on the UI.

# What is CORS?

# What is async and await?

# What is the use of `const json = await data.json();` in getRestaurants()

# 6: Coding Assignment :

// State Variable - Super Powerful Variable
// Hook is normal JS function, given by react , function has logic behind the scenes.

// const [state, setState] = useState(initialState);
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

# ● What is the difference between Named Export, Default export and \* as export?

Named exports can be multiple in single file, default exports are one for a file.
Named exports can be imported as
import {img} from './constants';
Default exports can be imported as component
import component from './compoents';

# ● What is the importance of config.js file

# ● What are React Hooks?

Recat hooks are normal JS functions, we have 2 most used hooks in the react.
useState() : is used to generate state variables in React.

- we import the useState() from the React
  and this useState is like a normal JS object, it
  const [state, setState] = useState(initialState);

state is the current value,
setState function is used to update the DOM
initialState will be the initial state value.

# Reconcilation algorithm:

After react Version V16, this reconcilation algorithm is know as **React Fiber**, it has incremental rendering

# Diff Algorithm:

Finds out the difference between the old version VDOM and the newer version of the VDOM.

Whenever state variable gets updated, react triggers a reconcilation cycle(i.e,.re-renders the component).

## useEffect()

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
Client side routing doesn't make any network calls to load the page, instead it loads the whole page on the initial load and then it just shows the loaded content based on the route.
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
  You import this {createBrowserRouter} named config from the "react-router-dom".
  and react-router-dom has this RouterProvider which will provide the routing config to our App.So we need to import that from the react-router-dom

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

===========

# Chapter 09 - Optimizing our App

# Theory -

● When and why do we need lazy()?
● What is suspense?
● Why we got this error : A component suspended while responding to
synchronous input. This will cause the UI to be replaced with a loading indicator.
To fix, updates that suspend should be wrapped with startTransition? How does
suspense fix this error?
● Advantages and disadvantages of using this code splitting pattern?
● When do we and why do we need suspense?

# Single responsibility principle:

if you have function or a class or something else, it has to have a single responsibility.

Each component that we have, we should give it a single responsibility. & we should not to do multiple things in single components, instead we should break the tasks into multiple components.

# Modularity:

Means, you break down your code into multiple or small modules, so that your code becomes more maintainable, reusable and more testable.

# Create your custom hooks

Hooks are like utility functions. We will just abstract or take out some responsibility from a component and extract the logic into a reusable hook, so that our hook and our component becomes more modular (hence more readable)

# custom Hooks in React

are a way to encapsulate reusable logic and state within functional components. Custom Hooks are typically used for local component state management and can handle specific functionality, such as form validation or API calls.

=========

# Our app is taking lot of time to load or it's bloating or our app's bundle size is increasing. What we can do?

You can say, i can use lazy loading to distribute my code into different chunks.

when you're bulding a big application, you need to make smaller components.
we will try to make smaller bundles of these files, this process is known as. chunking or code splitting etc....

# Chunking / Code Splitting / Dynamic Bundling / Lazy Loading / on Demand Loading /Dynamic import

# how & when to make smaller/separate bundles ?

Lets say I want to make a Logical seperation of bundle.
A bundle should have enough code for feature in the website. So that we can split our bundles into these smaller logical chunks.
Ex:
Lets say A site have multiple menus in the home page header, and each menu have multiple logical components and they can make a bundle, like the same way all the menus in the header will logically have their own seperate bundles.

So all these Smaller applications(bundles)in to a bigger application.

# How to create a separate bundle?

When I click on some link realted to the component, then only it should load that specific page component.

basically we use this lazy() function to load this component instead of directly importing it like regular imports.

# const Grocery = lazy(() => import("./components/Grocery/Grocery"));

this lazy() function takes a callback function and that will have import(), which takes the component path.

If you write your component in the route path directly like this:
element: (
<Grocery />
)
we might get the page related error, coz, the page might take sometime to make a call and get the data into the DOM, that fraction of time, the page will not find this new components data, so we might see some error on the page.
To avoid that we have this Suspence component from react

and when you write your component in the route path, you use this Suspense component(from react) and wrap your component inside this Suspence component.

<Suspense fallback={<div>Loading...</div>}>
<Grocery />{" "}
</Suspense>

So when the user clicks on the link, the react makes call to that specific component to load it, so it will show the fallback option to show loading until the actual components gets loaded on to the DOM.

https://legacy.reactjs.org/docs/code-splitting.html#reactlazy

this makes our large scale applications, very fast,very performant, light weight and optimized.

==============

# Coding -

● Create your custom hooks ✅
● Try out lazy and suspense ✅
● Make your code clean. ✅

References:
● https://reactjs.org/docs/hooks-custom.html
● https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting

# Chapter 10 - Jo dikhta hai vo bikta hai

Theory:
● Explore all the ways of writing css.
● How do we configure tailwind?
● In tailwind.config.js, what does all the keys mean (content, theme, extend,
plugins)?
● Why do we have .postcssrc file?
Coding:
● Configure Tailwind and try to build your whole app using tailwind.

# Tailwind CSS

https://tailwindcss.com/docs/guides/parcel

1. Install Tailwind with parcel, as we are using parcel bundle.

npm install -D tailwindcss postcss ()
npx tailwindcss init (created a config for tailwind) 2. Configure PostCSS 3. Configure your template paths

# References:

● https://styled-components.com/
● https://tailwindcss.com/
● https://getbootstrap.com/
● Material UI - https://mui.com/

# HOC

Higher order component is a function, takes a component and returns a component.

# Controlled & Uncontrolled Components

DOM is managed by the component is know as uncontrolled component, and DOM is managed by a component is a controlled component

# Chapter 11 - Data is the new Oil

Theory:

# ● What is prop drilling?

passing the data from a component to nested components. (Parent to the grand-child, great-grand child.)

# ● What is lifting the state up?

sometimes, you have to lift the state up to control the children. (passing the data from children to the parent to control the children)

# How you pass data from a child to a parent?

you pass a call back function as a prop to the child and that child will use this prop and returns the the data as response to it's parent.

# React Context:

Some Data (lets say ex: logged in user) is needed in many components and or in many places in the application. The logged in user info is needed in many places. So what we do is, we hold or keep that data in a central place, as in a context and we can access that data anywhere in our app without prop drilling(or passing data to the nested compoents from parent to child, & child to grand and grand child to great grand child).

####

1. This is how we create a Global context. By using createContext from react.

import { createContext } from "react";

const UserContext = createContext({
loggedInUser: "Default user",
});
export default UserContext;

2. to use this globally created context throught the app using useContext hook.

import { createContext, useContext } from "react";
const data = useContext(UserContext); // UserContext is a globally created context in the app here.This has to be imported from the utility file.

console.log("data", data);

# How to access the useContext hook in classbased components?

Baiscally we have 2 ways to consume the context.

1. using hooks - useContext with functional components
2. <UserContext.Consumer> inside this we will have jsx code and in that, we use callback function, which gets the access to the context data - in classbased components.
   we can use <UserContext.Consumer> </UserContext.consumer> to access the information from contextAPI.

# ● What is Context Provider and Context Consumer?

# Context Provider:

is used to add/update the info in the context data. And we can wrap our application inside this context Provider. So that, you can use the context data through out the application.

# Context Consumer:

is used to access the context data anywhere in the application

# ● If you don’t pass a value to the provider does it take the default value?

Yes, it does use the default value, if we don;t pass any value to the provider.

# Coding:

# ● Practice React Context with code examples

● Try out Nested Contexts
References:
● Lifting State Up
● React Context

# Redux Tool Kit:

- install @@reduxjs/toolkit and react-redux
- Build our own store
- Connect our store to our app
- Create a Slice (cartSlice)
- will dispatch(action)
- Read the data using - Selector

# Chapter 12 - Let's Build our Store

Theory:

# ● useContext vs Redux.

# ● Advantage of using Redux Toolkit over Redux.

You can not directly modify our slice in redux store.
**How to write the data into the redux store slice.**

If i click on a button, it dispatches an action. And this action will call a function (this function here is a reducer), and this reducer function will actually modifies the slice of the redux store,
for an example, lets say i want to add an item to the cart, so when i click on an add button, it dispatches an action, and this action will call a function (reducer), and this reducer internally modifies the cartSlice.
**How to read the data from the redux store slice.**
we use selector to read the data from the redux store. And this selector modifies the react component.
This phenomenon is know as subscribing to the store.

# ● Explain Dispatcher.

# ● Explain Reducer.

# ● Explain slice.

# ● Explain selector.

# ● Explain createSlice and the configuration it takes.

# Coding:

● Practice making a store, slices and do read and write operations using Redux
Store
● Build Cart Flow using Redux Store

#

# Chapter 13 - Time for the test

Theory:

# ● What are different types for testing?

1. Manual Testing
2. Write a code (test cases) to test the application.

# ● What are different types for testing a DEVELOPER can do in a React Application?

3 types of developer Testing:

# 1. Unit Testing:

you test your react application in an isolation. Let's say, if i want to test a header component, What I'll do is, i'll test this header component in an isolation of the app.
I'll try to render my header component and see whether it is got rendered properly or not.
one unit of your code or react application or you are testing a specific or small unit of your react application.

# 2. Integration Testing:

Testing the integration of the application. Lets say, we have a big application and there are so many components, & they talk to each other,& we develop a flow of an action in a react application, we test that.

# 3. End to End Testing (e2e Testing): -

Testing a React application, as soon as the user lands on the website, to the user leaves the website, Which means we will test all the different flows.
lets say, the user entering into the website, clicking on login, checking out the products, adding items to the cart, updating the cart, removing the items, going to the checkout page.
the e2e testing requires different tools like,
cypress,puppeteer, selenium liek tools to do the end to end testing.

# ● What is Enzyme?

# ● Enzyme vs React Testing Library

# ● What is Jest and why do we use it?

_Coding:_

# Setup React Testing Library

React Testing Library is built on top of DOM Testing library.
React Testing Library uses Jest (Jest is a delightful JavaScript Testing Framework) behind the scenes.

1. install react testing library : npm i -D @testing-library/react
2. install jest into the app : npm i -D jest
3. install babel dependencies - npm install --save-dev babel-jest @babel/core @babel/preset-env
4. Configure babel: create file with babel.config.js
5. Configure Parcel Config file to disable default babel transpilation (so that we can use the configured babel configuration)
6. Jest Configuration: npx jest --init
7. install - jsdom library: npm install -D jest-environment-jsdom
   OR
   npm install --save-dev jest-environment-jsdom
8. install @babel/preset-react to make JSX work in test cases.
9. Include @babel/preset-react inside my babel configuration
10. Install - npm i -D @testing-library/jest-dom

# where do we write test cases?

**/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x)
**tests** = dunder ((under score , underscore))

- Header.test.js
- Header.test.ts
- Header.spec.js
- Header.spec.ts

==================
● Write Unit Tests for Header Component to test for Logo, Cart - 0 items and
Online Status

# Unit Testing:

Testing one unit/component in an isolation.

# Integration Testing:

Testing multiple components

● Write Integration Test case for search feature on the Homepage
● Write Integration Test case for Add to Cart flow
