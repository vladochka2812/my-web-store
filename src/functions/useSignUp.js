import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import { handleSaveAccessToken } from "./useAccessToken";

export const useSignUp = async (email, password, navigate) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    handleSaveAccessToken(user.user.accessToken);
    navigate("/");
  } catch (error) {
    console.error("Error in user sign In", error.message);
  }
};
