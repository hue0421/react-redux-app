import React from "react";
import { connect } from "react-redux";
import AddNumberComponent from "../components/AddNumber";
import { increase } from "../stroe";

const reduxProps = (dispatch) => {
  return {
    handleAdd: (size) => {
      dispatch(increase(size));
    },
  };
};

export default connect(null, reduxProps)(AddNumberComponent);
