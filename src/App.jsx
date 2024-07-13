// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
