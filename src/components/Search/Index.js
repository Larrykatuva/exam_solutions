import React from "react";
import Navbar from "../Home/Navbar";
import Results from "./Results";
import Footer from "../Home/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Results search={"Microfinance"} />
      <Footer />
    </div>
  );
};

export default Index;
