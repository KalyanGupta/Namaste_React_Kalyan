
#Parcel

- Builds the development build
- Creates the local server and hosts our application on it and runs our application port number 1234
- HMR = Hot Module Replacement (Refreshes our React page in browser automatically, when we make some code changes)

- But how do parcel automatically refresh the page? It uses the "file watch algorithm" which will look for changes and if something changes it will do the build again and the React page in the browser gets 
refreshed automatically.  

- Parcel also uses the cache for the faster builds. When you build it first time it will create a folder called .parcel-cache and will store the cache there, so for the next builds Parcel uses that cache for the faster buidling. 

- Parcel will also do the image optimization. (The most expensive thing in your browser is to load images into your page)

- When we do the producation build the Parcel will minify the file. 

- Parcel will do budling

- Parcel will do file compression. 

- Parcel will do consistent hashing.

- Parcel will do Code spliting

- Parcel will do differential bundling- (Means creates different bundles so your application will be compatible to run on different browsers and different versions)

- Parcel gives you better Error handling suggestions. 

- Parcel by default hosts your application on http, but Parcel also gives a way to host it on the https.

- Parcel supports the tree shaking. 

- Parcel supports the lazy loading.

- Parcel create the different bundles for development and production.



# Redux ToolKit

 - Install @reduxjs/toolkit and react-redux.
 - Build our store.
 - Connect our store to our app.
 - Create Slice (Cart Slice)
 - Dispatch an action.
 - Read data using the selector
 
