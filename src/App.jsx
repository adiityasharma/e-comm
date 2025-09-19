import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="container lg:w-[1499px] mx-auto ">
      <Header />
      <Home />
      <Footer/>
    </main>
  );
};

export default App;
