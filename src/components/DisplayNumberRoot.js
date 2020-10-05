import React from "react";
import DisplayNumber from "./DisplayNumber";

const DisplayNumberRoot = (props) => {
  console.log("DisplayNumberRoot");
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber number={props.number} />
    </div>
  );
};

export default DisplayNumberRoot;
