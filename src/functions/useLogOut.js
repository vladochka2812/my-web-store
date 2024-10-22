import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { handleDeleteAccessToken } from "./useAccessToken";

export const logOutUser = async ({ navigate }) => {
  await signOut(auth);
  handleDeleteAccessToken();
  navigate("/");
};
