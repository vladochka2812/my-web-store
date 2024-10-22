import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Category from "./pages/category/[categoryId]";
import WishList from "./pages/WishList";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { RoutesList } from "./utilities/routes";
import Auth from "./pages/Auth";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path={RoutesList.HOME} element={<Home />} />
            <Route path={RoutesList.CATEGORY} element={<Category />} />

            <Route path={RoutesList.SIGNUP} element={<Auth />} />
            <Route path={RoutesList.SIGNIN} element={<Auth />} />
            <Route
              path={RoutesList.CART}
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path={RoutesList.WISHLIST}
              element={
                <ProtectedRoute>
                  <WishList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
