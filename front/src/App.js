import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CataloguePage from "./pages/CataloguePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
