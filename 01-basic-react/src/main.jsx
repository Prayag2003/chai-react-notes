import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <div>Custom MyApp</div>;
}

const FatArrow = () => <div> Hello this is fat arrow</div>;

const CurlyBraces = () => {
  return (
    <>
      <h1>Curly Braces</h1>
      <p>Curly Braces</p>
    </>
  );
};

const vari = "Variable";
// NOTE:  Custom React Element, hence this wont work
// we need a particular syntax to create a custom element
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click Me",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click Me
  </a>
);

// IMPORTANT: Pre-defined Syntax ( TAG, OBJECT, CHILDREN)
const ReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click Me to reach google ",
  vari
);

ReactDOM.createRoot(document.getElementById("root")).render(<CurlyBraces />);
