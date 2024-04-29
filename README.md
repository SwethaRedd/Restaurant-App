# Restaurant App Layout

/\*

- Header
  - Logo
  - Nav Items - Home, About us, Cart
- Body

  - Search Component
  - Cards Container
    - Restaurant Card 1
      - Image
      - Description
      - Cuisine
      - Location
      - Rating ----etc.
    - Restaurant Card 2

- Footer - Copy rights - Links - Contact Info
  \*/

  # Props:

  - Props are normal arguments to a function.
  - when you want to pass a data to the component, you pass in as a prop.
  - Destructuring
  - Swiggy : https:..www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING

# Config driven UI:

Web site is driven by Configs(Data).
Controlling your UI using your data or your config . Your config(data) comes from your backend api.

The data can be different for different locations.
Few websites are operated in different countries, and displays webiste information tailored to each specific location.

This is achieved through a config driven UI, where the backend controls the front end UI configuration, allowing for targetted content delivery based on the user's location.

This system ensures that users see relevant information, such as promotions, offers or deals and details specific to their location resulting in a personalized and convenient experience.

# Ex:

If you're in state of the country and you might have different deals or different restaurants in your locals, and you're in other country / state the deals/ the local restaruants may vary, so let's say if you have a specific section to be shown on the UI- if you have some deals/some specific area/ offers, then that UI is different to the UI that is in different state or country or locale. So it won;t show that speicific deals section on the UI at all and shows rest of the content on the UI.
so it is called "data driven UI" or "config driven UI".

UI Layer
Data Layer (Both of these together makes the front end application, so you need to have knowledge on these 2 layers);

# Cloudinary Images :

Basically, when you develop an application you put all your images in a CDN.
which means, all your images are hosted in cloudinary.

https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

# Map, reduce, filter

# key :

Unique ID
Why we need to use the key?
React Uniquely doesn’t identify the new item. It re renders everything. So we need a unique property to uniquely identify it.

Don’t use index as key (React official document suggests not to use index as Key)

# Import / Export

*#*default export : you export only one default export per page.
We can import this default export as

import Component from "/path';
Ex:
import Header from "./Header';

_#_ Named export : In a single file, we have to export multiple exports, we can use this named exports instead of default export.
export const Component;

We can import this named Export as
import Header from "./Header';

import {Component} from "path;
Ex: import {CDN_URL} from "./constant";

_#_ **\*\*\*\***\*\*\*\***\*\*\*\***
React Features:
Faster DOM Manipulations
Effiecent DOM Manipulations
VDOM Manipulations
Diffing algorithm
reconciliation

#

# React Hooks:

React Hooks are, normal JS **utility functions**,

1. we need to import the hook first - we import the state as named importing.
   ex: import {useState} from 'react';
   i. local scope of the state variable is inside that component.

2. We create a state variable : const [] = useState();

# const [listOfRestaurants] = useState(); // react js state variable

# let listOfRestaurants; // Normal JS variable

so basically, the react state variables are similar to JS variables.

# React useStateHook

const [state, setstate] = useState(initialState);

state = current State
initialState = initial state value
setstate = isa function, where you update the state.

# Hooks Used most:

- useState(): is used to generate state variables in React.

// filter logic
you can create the logic and pass that to the setstate(filteredLogic)
const filteredList = listOfRestaurants.filter(
(res) => res.data.avgRating > 4
);
setListOfRestaurants(filteredList);

OR you can directly write the logic inside the setstate();
// setListOfRestaurants(
// (filteredList = listOfRestaurants.filter(
// (res) => res.data.avgRating > 4.1
// ))
// );

whenever a state variable changes, react re renders the component.

render() :

- useEffect() :

######

React will keep your UI in sync with data layer.
In data layer when you have your local state variable, as soon as your data layer updates, your UI will updates.

How it will update?, as soon as the data layer updates, the react component re renders.

## Reconciliation Algorithm:

is also know as **react fiber**
On the UI, we have DOM(tree like modal)

## Diff Algorithm:

Diffing algorithm is to identify the changes in the newly created virtual dom and previoius version of dom after any changes are made.

###########################################

# Monolith:

# MicroServices:

Web Apps/ UI fetch the data from the BE:

1. When our app loads -> make an api call to fetch the data - when we get the data , we render the UI.

#### CORS : Cross Origin Resource Sharing

calling some api() from the local origin/host is blocked by CORS policy:
CORS Policy?
Who is blocking us??: Our browsers(chrome) block us from calling one origin to other origin.
If the origin mismatches, the browser blocks that API call. This is the CORS policy.

i.e,. our chrome browser is not allowing us to call the swiggies api from local host.

- What is CORS?

- What is Cross Origin?
  Cors is a mechanism,which uses additional https headers to tell the browser, whether a specific web app can share resource with another web app.
  If the 2 web apps have same origin then they can share the resource without an issue, but
  if the domains are different, then they need to follow the CORS mechanism.

- Are subdomain, host, port, protocol fall under Cross-Origin mechanism?

https://ak.in -> can not share the resources with

https://ak.in  
dfrnt domain name ---- google.com/api/getData (X)
subdomain ------- api.ak.in (X)
different port: ---- ak.in:5050 (X)
different protocals ---- http:ak.in (X)

- How does Cross Origin Request Sharing works behind the scenes?

- What is CORS preflight?
- What is the OPTIONS call?
- What are the additional HTTP Headers required?
- Does server always make Preflight options call in CORS protocol?
- What browser versions support CORS?
- Access Control Allow Origin Error?
- How to solve CORS Error?
- How to resolve CORS issue in Google Chrome?
  You can install a chrome extension to bypass the CORS errors.

# Hook: is nothing but normal javascript function.

# useEffect() :

useEffect is a function,
useEffect(()=>{}, []);
useEffect will take 2 arguments,
1st arg : callback function
2nd arg : []
callback function of the useEffect will be called after the component renders.

if you have to do something after rendering the component, you have to write that inside the useEffect()
