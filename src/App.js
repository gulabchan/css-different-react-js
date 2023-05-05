import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <h1 style={{ color: "red" }}>Hello, world!</h1>
      <p className="text">This is an example of inline styling.</p>
      <p className="text blue">This is an example of CSS modules.</p>
      <button className="button">Click me!</button>
    </div>
  );
};

export default App;
