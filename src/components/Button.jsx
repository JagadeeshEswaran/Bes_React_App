import React from "react";

const Button = ({ title, handler, bsStyles, valueString }) => {
  return (
    // JSX AREA
    <button
      className={bsStyles}
      onClick={(e) => handler(valueString, e)}
      value={valueString}
    >
      {title}
    </button>
  );
};

export default Button;
