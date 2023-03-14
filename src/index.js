import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop";

function App() {
  return <Shop />;
}

render(<App />, document.querySelector("#root"));
