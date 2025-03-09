import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

const elem = <span>sample testing</span>;
// JSX HEADING -
const jsxHeading = (
  <h1 id="heading" className="owner" tabIndex="1">
    This is JSX...
    <br />
    {elem}
  </h1>
);

const TitleComponent = () => (
  <h1 id="title" className="owner" tabIndex="1">
    This is Title Component
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      <h1 id="heading" className="owner" tabIndex="1">
        This is Heading Component
      </h1>
      {jsxHeading}
      <TitleComponent />
      <div>OR calling a function in JSX</div>
      {TitleComponent()}

    </div>
  );
};

// root.render(jsxHeading);
root.render(<HeadingComponent />);

/* 
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
--------------------------
*/

// /*
//     <div id="parent">
//         <div id="child">
//             <h1>Hello World from nested divs</h1>
//             <h1>Hello World from nested divs</h1>
//         </div>
//     </div>

// */

// const heading = React.createElement("h1", { id: "heading" }, "Hello world");
// root.render(heading);

// import React from "react";
// import { createRoot } from "react-dom/client"; // Correct import

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "Hello World from  22345 nested divs"),
//     React.createElement("h1", { id: "heading" }, "Hello World from 2 nested divs"),
//   ])
// );

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement); // Use createRoot correctly
// root.render(parent);

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading", xyz: "abc" },
// //   "Hello World from React!"
// // );

// // root.render(heading);

// // console.log(heading); //Object
