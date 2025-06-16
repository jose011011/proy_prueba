// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Principal from "./pages/Principal";
import Peliculas from "./pages/Peliculas";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Navbar />
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/oferta" element={<Peliculas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
