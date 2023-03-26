import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import fetchNodes from "./fetchNodes";
const nodes = fetchNodes();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App nodes={nodes} />
  </React.StrictMode>,
  rootElement
);
