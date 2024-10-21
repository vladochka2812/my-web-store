import React from "react";
import { NavbarLink } from "./NavbarLink";
import { IoCartOutline } from "react-icons/io5";
import Logo from "../../images/logo.png";

export const Navbar = ({ categories }) => {
  return (
    <nav>
      <div className="flex justify-between items-center h-[40px] m-5">
        <div className="flex flex-1 gap-6">
          {categories &&
            categories.map((item) => (
              <NavbarLink
                key={item}
                name={item}
                link={`category/:${
                  item.charAt(0).toUpperCase() + item.slice(1)
                }`}
              />
            ))}
        </div>
        <div>
          <NavbarLink
            link={"/"}
            name={
              <img
                src={Logo}
                alt="logo"
                className="object-cover h-10 hover:h-[42px] transition-color"
              />
            }
          />
        </div>
        <div className="flex flex-1 justify-end gap-6">
          <span className="flex gap-2">
            <NavbarLink link={"/signUp"} name="Sign up" />
            <span>/</span>
            <NavbarLink link={"/login"} name="Login" />
          </span>

          <NavbarLink link={"/card"} name={<IoCartOutline size={26} />} />
        </div>
      </div>
    </nav>
  );
};
