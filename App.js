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

import React from "react";
import ReactDOM from 'react-dom/client';
const parent = React.createElement(
    "div", 
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [ React.createElement("h1", {id:"heading"}, "I am h1 tag test123"), 
            React.createElement("h2", {id:"heading"}, "I am h2 tag test123") ]

        ), 
        
        React.createElement(
            "div",
            {id:"child1"},
            [ React.createElement("h1", {id:"heading"}, "I am h1 tag child1 test123"), 
            React.createElement("h2", {id:"heading"}, "I am h2 tag child1 test123") ]

        ), 


    ]
)    
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



