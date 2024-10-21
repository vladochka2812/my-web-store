import React from "react";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import { handleSaveAccessToken } from "../functions/useAccessToken";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const signInUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      handleSaveAccessToken(user.user.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error in user sign In", error.message);
    }
  };
  return (
    <div className="flex w-full justify-center items-center mt-20">
      <AuthForm handleAuth={signInUser} />
    </div>
  );
};

export default SignIn;
