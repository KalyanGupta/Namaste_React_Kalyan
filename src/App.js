/*
Required Structure:

<div id=”parent”>

    <div id=”child”>
        <h1 id="heading">I am h1 tag </h1>
        <h2 id="heading">I am h2 tag </h2>
    </div>

    <div id=”child1”>
        <h1 id="heading">I am h1 tag child1</h1>
        <h2 id="heading">I am h2 tag child2</h2>
    </div>

</div>

*/

// import React from "react";
// import ReactDOM from 'react-dom/client';
// const parent = React.createElement(
//     "div", 
//     {id: "parent"},
//     [
//         React.createElement(
//             "div",
//             {id:"child"},
//             [ React.createElement("h1", {id:"heading"}, "I am h1 tag test123"), 
//             React.createElement("h2", {id:"heading"}, "I am h2 tag test123") ]

//         ), 
        
//         React.createElement(
//             "div",
//             {id:"child1"},
//             [ React.createElement("h1", {id:"heading"}, "I am h1 tag child1 test123"), 
//             React.createElement("h2", {id:"heading"}, "I am h2 tag child1 test123") ]

//         ), 


//     ]
// )    
// console.log(parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const heading = <h1 id="heading">JSX Code</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Heading = () => <h1>Heading functional component</h1>

// 

//React element:

// const Element1 = <h1>Heading React Element1</h1>

// const Element2 = <h1>Heading ReactElement2</h1>

//React functional components:

// const Component1 = () =>{
//     return(
//         <h1>Component1</h1>
//     )
// }

// const Component2 = () =>{
//     return(
//         <h1>Component2</h1>
//     )
// }

//1) Placing a React element inside another React element:
// const Element3 =(
//         <div>
//             <h1>Placing a React elements inside another React element</h1>
//             {Element1}
//             {Element2}       
//         </div>

// )


//2) Placing a React element inside a React functional component:
// const TestComponent = () =>{
//     return(
//         <div>
//             <h1>Placing a React Element inside a React functional component</h1>
//             {Element3}
//         </div>
//     )
// }

//3) Placing a React functional Component inside a React element:
// const Element4 = <div>
//                     <h1>React Element4</h1>
//                     {/* <TestComponent></TestComponent> */}
//                     {/* <TestComponent/> */}
//                     {TestComponent()}
//                  </div>


// 4 Placing a React functional Component inside a React functional component:
// const TestComponent1 = () =>{
//     return(
//         <div>
            {/* <TestComponent></TestComponent> */}
            {/* <TestComponent/> */}
//            {TestComponent()}
//        </div>
//    )
//}


//Creating an infinte loop:
// const InfinteLoop = () =>{
//     return(
//         <div>
//             <h1>You are in loop</h1>
//             <InfinteLoop1></InfinteLoop1>
//         </div>
//     )
// }

// const InfinteLoop1 = () =>{
//     return(
//         <div>
//             <InfinteLoop></InfinteLoop>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering a React element:
//root.render(Element3);
//root.render(Element4);

//Rendering a React functional component:
//root.render(<TestComponent1></TestComponent1>)

//root.render(<InfinteLoop></InfinteLoop>)


import React, { useEffect, useState } from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"));
import Body from './components/Body';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

//import Grocery from './components/Grocery';

//Lazy loading Grocery
const Grocery = lazy( () => import('./components/Grocery')  );


const AppLayout = () =>{
    const [userName, setUserName] = useState();

    useEffect(()=>{
    /*Assume: Make an API call by sending user name and password and API returned us the username */ 

        const data = {
            name: "Kalyan"
            };    
        setUserName(data.name)
    }, [])

    return(
        <Provider store={appStore}>

            <UserContext.Provider value={ {loggedInUserName: userName, setUserName} }> 
            <div className='app'> 
                <Header/>
                <Outlet/>      
            </div>
            </UserContext.Provider>

        </Provider>
        
    )
}

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/grocery",
                element:   <Suspense fallback={<Shimmer/>}> 
                                <Grocery/> 
                            </Suspense>   
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu></RestaurantMenu>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/checkout",
                element: <Checkout></Checkout>
            }
        ],
        errorElement: <Error></Error>
        
    },
    
])

//root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}></RouterProvider>)








