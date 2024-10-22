import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { RoutesList } from "../utilities/routes";
import { auth } from "../configs/firebase";
import { handleSaveAccessToken } from "./useAccessToken";
import { useNavigate } from "react-router";

export const useAuthUser = ({ pathname, email, password }) => {
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      handleSaveAccessToken(user.user.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error in user's auth", error.message);
    }
  };

  const signUp = async ({ email, password }) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      handleSaveAccessToken(user.user.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error in user's auth", error.message);
    }
  };
  return pathname === RoutesList.SIGNIN ? { sign: signIn } : { sign: signUp };
};
