import React from "react";
import AddNumber from "./AddNumber";

const AddNumberRoot = (props) => {
  console.log("AddNumberRoot");
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber handleAdd={props.handleAdd} />
    </div>
  );
};

export default AddNumberRoot;
