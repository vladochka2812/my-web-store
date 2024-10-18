import React from "react";
import { Link } from "react-router-dom";

export const NavbarLink = ({ name, link }) => {
  return (
    <Link
      to={link}
      className="text-[18px] hover:underline transition-transform"
    >
      {name}
    </Link>
  );
};
