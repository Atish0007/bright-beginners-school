// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
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
