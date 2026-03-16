import {useEffect} from "react";
// import heroImg from './assets/hero.png'
// import './App.css'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Facilities from "./components/Facilities";
import Activities from "./components/Activities";
import Nursery from "./components/nursery";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
// import AdmissionPopup from "./components/AdmissionPopup";

function App() {


  useEffect(() => {
   const handleContextMenu = (e) => {
      e.preventDefault();
    };
  const handleKeyDown = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  };
  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("contextmenu", handleContextMenu);
  };
}, []);

  return (
    <>
      <Header />
      <Hero />
      <Aboutus />
      <Facilities />
      <Activities />
      <Nursery />
      <Admissions />
      <Footer />;
      {/* <AdmissionPopup /> */}
    </>
  )
}

export default App
