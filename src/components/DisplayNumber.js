import React from "react";
import { useSelector } from "react-redux";

const DisplayNumber = () => {
  console.log("DisplayNumber");
  const number = useSelector((store) => store.number);
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly={true} />
    </div>
  );
};

export default DisplayNumber;
