import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-[18px] flex justify-center items-center bg-slate-950 w-full p-2 text-white rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
