import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp";
import { apiUrl } from "./constants/ApiUrl";
import Login from "./pages/Login";

function App() {
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${apiUrl}/products/categories`);
      if (!response.ok) {
        console.log("Response doesn't seem to be ok");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Router>
        <header>
          <Navbar categories={categories} />
        </header>
        <div>
          <section>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              {categories &&
                categories.map((item) => (
                  <Route key={item} path={`/${item}`} />
                ))}

              <Route path="/signUp" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
