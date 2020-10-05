import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { increase, decrease } from "../stroe";

const AddNumber = () => {
  console.log("AddNumber");
  const [size, setSize] = useState(1);
  const dispatch = useDispatch();
  //윗 라인 useDispatch() 추가
  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={() => dispatch(increase(size))} />
      {/* 윗 문장 추가 */}
      <input type="button" value="-" onClick={() => dispatch(decrease(size))} />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
};

export default AddNumber;
