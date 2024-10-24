import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarLink } from "../Navbar/NavbarLink";
import { Button } from "../shared/Button/Button";
import { Input } from "../shared/Input/Input";
import { RoutesList } from "../../utilities/routes";
import {
  signInFormComponents,
  signUpFormComponents,
} from "../../utilities/formComponents";
import { useAuthUser } from "../../functions/useAuth";

export const AuthForm = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { sign } = useAuthUser({ pathname, email, password });

  const cacheFormText = useMemo(() => {
    return pathname === RoutesList.SIGNIN
      ? signInFormComponents
      : signUpFormComponents;
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
      <Button onClick={() => sign()}>{cacheFormText.button}</Button>
      <NavbarLink link={cacheFormText.link} name={cacheFormText.description} />
    </div>
  );
};
