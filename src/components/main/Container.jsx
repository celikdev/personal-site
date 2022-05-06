import React from "react";

const Container = ({ children, id, className }) => {
  return (
    <div id={id} className={`w-full ${className} bg-white flex flex-col py-16`}>
      {children}
    </div>
  );
};

export default Container;
