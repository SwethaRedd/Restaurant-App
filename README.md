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
Controlling your UI using your data, your config (data) . Your config(data) comes from your backend.

The data can be different for different locations.

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
