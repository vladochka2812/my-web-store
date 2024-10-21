import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Category from "./pages/category/[categoryId]";
import WishList from "./pages/WishList";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`/category/:categoryId`} element={<Category />} />

              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/wishList"
                element={
                  <ProtectedRoute>
                    <WishList />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
