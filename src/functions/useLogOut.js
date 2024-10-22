import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { handleDeleteAccessToken } from "./useAccessToken";
import { useNavigate } from "react-router";

export const useLogOutUser = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    handleDeleteAccessToken();
    navigate("/");
  };

  return { logOut };
};
