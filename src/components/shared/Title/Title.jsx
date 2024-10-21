import React from "react";

export const Title = ({ name }) => {
  return (
    <h2 className="w-full flex justify-center text-[24px] font-semibold">
      {name}
    </h2>
  );
};
