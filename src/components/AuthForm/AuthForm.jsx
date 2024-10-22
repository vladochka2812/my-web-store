import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarLink } from "../Navbar/NavbarLink";
import { Button } from "../shared/Button/Button";
import { Input } from "../shared/Input/Input";
import { RoutesList } from "../../utilities/routes";
import { authUser } from "../../functions/useAuth";

export const AuthForm = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let formText = useMemo(() => {
    if (pathname === RoutesList.SIGNIN) {
      return {
        title: "Sign in to your account",
        description: "Don't have an account?",
        link: "/signUp",
        button: "Sign In",
      };
    } else {
      return {
        title: "Create account",
        description: "Already have an account?",
        link: "/signIn",
        button: "Sign Up",
      };
    }
  }, [pathname]);

  return (
    <div className="w-[400px] h-[400px] shadow-xl rounded-xl p-3 flex flex-col justify-around items-center">
      <h2 className="text-[32px] font-semibold">{formText.title}</h2>
      <div>
        <Input
          placeholder="Email"
          type="email"
          className="mt-4"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          className="mt-4"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <Button
        onClick={() => {
          authUser({ pathname, email, password, navigate });
        }}
      >
        {formText.button}
      </Button>
      <NavbarLink link={formText.link} name={formText.description} />
    </div>
  );
};
