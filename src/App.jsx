import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Section1 from "./components/Section1.jsx";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Section1/>
    </>
  );
}

export default App;
