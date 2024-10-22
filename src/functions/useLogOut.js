import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { handleDeleteAccessToken } from "./useAccessToken";

export const useLogOut = async () => {
  await signOut(auth);
  handleDeleteAccessToken();
};
