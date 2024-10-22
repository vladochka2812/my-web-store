import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarLink } from "../Navbar/NavbarLink";
import { Button } from "../shared/Button/Button";
import { Input } from "../shared/Input/Input";
import { RoutesList } from "../../utilities/routes";
import { signInFormText, signUpFormText } from "../../utilities/formText";

export const AuthForm = ({ handleAuth }) => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const cacheFormText = useMemo(() => {
    if (pathname === RoutesList.SIGNIN) {
      return signInFormText;
    } else {
      return signUpFormText;
    }
  }, [pathname]);
  return (
    <div className="w-[400px] h-[400px] shadow-xl rounded-xl p-3 flex flex-col justify-around items-center">
      <h2 className="text-[32px] font-semibold">{cacheFormText.title}</h2>
      <div>
        <Input
          placeholder="Email"
          type="email"
          className="mt-4"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          className="mt-4"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <Button
        onClick={() => {
          handleAuth(email, password);
        }}
      >
        {cacheFormText.button}
      </Button>
      <NavbarLink link={cacheFormText.link} name={cacheFormText.description} />
    </div>
  );
};
