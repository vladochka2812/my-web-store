import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../configs/firebase";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/signIn" />;
  }
  return children;
};

export default ProtectedRoute;
