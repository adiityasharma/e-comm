import React from "react";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <main className="container lg:w-[1499px] mx-auto ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
