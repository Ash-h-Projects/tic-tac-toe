import React from "react";
import Box from "./Box";

const Row = ({ values, onBoxClick }) => {
  return (
    <div className="row">
      {values.map((val, index) => (
        <Box
          key={index}
          value={val}
          onClick={() => onBoxClick(index)}
        />
      ))}
    </div>
  );
};

export default Row;
