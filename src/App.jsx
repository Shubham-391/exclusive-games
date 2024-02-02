import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

export default App;
