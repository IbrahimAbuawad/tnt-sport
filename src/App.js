import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
