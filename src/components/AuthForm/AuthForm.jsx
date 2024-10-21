import React from "react";
import Logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import { NavbarLink } from "../Navbar/NavbarLink";
import { Button } from "../shared/Button/Button";
import { Input } from "../shared/Input/Input";

export const AuthForm = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  let formText = {};
  if (pathname === "/login") {
    formText = {
      title: "Log in to your account",
      description: "Don't have an account?",
      link: "/signUp",
      button: "Login",
    };
  } else {
    formText = {
      title: "Create account",
      description: "Already have an account",
      link: "/login",
      button: "Sign up",
    };
  }
  return (
    <div className="w-[400px] h-[400px] shadow-xl rounded-xl p-3 flex flex-col justify-around items-center">
      <h2 className="text-[32px] font-semibold">{formText.title}</h2>
      <div>
        <Input
          placeholder="Email"
          type="email"
          className="mt-4"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <Input placeholder="Password" type="password" className="mt-4" />
      </div>

      <Button onClick={() => console.log("aaaa")}>{formText.button}</Button>
      <NavbarLink link={formText.link} name={formText.description} />
    </div>
  );
};
