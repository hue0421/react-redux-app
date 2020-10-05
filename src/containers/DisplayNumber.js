import React from "react";
import { connect } from "react-redux";
import DisplayNumberComponent from "../components/DisplayNumber";

const reduxProps = (state) => {
  return {
    number: state.number,
  };
};

// (상태, 함수)(DisplayNumberComponent)
export default connect(reduxProps, null)(DisplayNumberComponent);
