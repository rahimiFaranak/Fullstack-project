import React from "react";
import "./logo.css";
const Logo = () => {
  return (
    <div className="Logo">
      <img src="logo512.png" className="img" alt="logo" />
    </div>
  );
};
export default React.memo(Logo);
