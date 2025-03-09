/* 
    <div id="parent">
        <div id="child">
            <h1>Hello World from nested divs</h1>
            <h1>Hello World from nested divs</h1>
        </div>
    </div>

*/
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from nested divs"
    ),
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from nested divs"
    ),
  ])
);

root.render(parent);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

// root.render(heading);

// console.log(heading); //Object
