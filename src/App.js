import React, { useState } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

const App = () => {
  const [number, setNumber] = useState(0);

  const handleAdd = (size) => {
    setNumber(number + size);
  };

  return (
    <div className="container">
      <h1>Root</h1>
      <AddNumberRoot handleAdd={handleAdd} />
      <DisplayNumberRoot number={number} />
    </div>
  );
};

export default App;
