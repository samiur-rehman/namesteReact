import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 is tag"),
    React.createElement("h2", {}, "h2 is tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 is tag"),
    React.createElement("h2", {}, "h2 is tag"),
  ]),
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
