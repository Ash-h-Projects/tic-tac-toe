import React from "react";

const Box = ({ value, onClick }) => {
  return (
    <div className="box" onClick={onClick}>
      {value}
    </div>
  );
};

export default Box;
