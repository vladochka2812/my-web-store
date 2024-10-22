import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import { handleSaveAccessToken } from "./useAccessToken";

export const useSignIn = async (email, password, navigate) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    handleSaveAccessToken(user.user.accessToken);
    navigate("/");
  } catch (error) {
    console.error("Error in user sign In", error.message);
  }
};
