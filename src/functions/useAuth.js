import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { RoutesList } from "../utilities/routes";
import { auth } from "../configs/firebase";
import { handleSaveAccessToken } from "./useAccessToken";

export const useAuth = async ({ pathname, email, password, navigate }) => {
  try {
    const user =
      pathname === RoutesList.SIGNIN
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);
    handleSaveAccessToken(user.user.accessToken);
    navigate("/");
  } catch (error) {
    console.error("Error in user's auth", error.message);
  }
};
