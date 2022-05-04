import React from "react";

const Container = ({ children, id, className }) => {
  return (
    <div
      id={id}
      className={`w-full ${className} bg-white flex flex-col items-start justify-center`}
    >
      {children}
    </div>
  );
};

export default Container;
