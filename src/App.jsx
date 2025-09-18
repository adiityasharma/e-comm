import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="container lg:w-[1499px] mx-auto ">
      <Header />
      <Home />
    </main>
  );
};

export default App;
