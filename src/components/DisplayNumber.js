import React from "react";

const DisplayNumber = (props) => {
  console.log("DisplayNumber");
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.number} readOnly={true} />
    </div>
  );
};

export default DisplayNumber;
