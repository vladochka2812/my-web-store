import { useSignIn } from "../functions/useSignIn";
import { useSignUp } from "../functions/useSignUp";
import { RoutesList } from "./routes";

export const signUpFormComponents = {
  title: "Create account",
  description: "Already have an account",
  link: RoutesList.SIGNUP,
  button: "Sign Up",
  function: useSignUp,
};

export const signInFormComponents = {
  title: "Sign in to your account",
  description: "Don't have an account?",
  link: RoutesList.SIGNUP,
  button: "Sign In",
  function: useSignIn,
};
