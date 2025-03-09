/* 
    <div id="parent">
        <div id="child">
            <h1>Hello World from nested divs</h1>
            <h1>Hello World from nested divs</h1>
        </div>
    </div>

*/

import React from "react";
import { createRoot } from "react-dom/client"; // Correct import

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from 1 nested divs"),
    React.createElement("h1", { id: "heading" }, "Hello World from 2 nested divs"),
  ])
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Use createRoot correctly
root.render(parent);


// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

// root.render(heading);

// console.log(heading); //Object
