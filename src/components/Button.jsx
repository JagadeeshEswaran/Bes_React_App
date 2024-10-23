import React from "react";

const Button = ({ title, handler, bsStyles, valueString }) => {
    

    
    

  return (
    <button className={bsStyles} onClick={() => handler(valueString)} value={valueString}>
      {title}
    </button>
  );
};

export default Button;
