import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
