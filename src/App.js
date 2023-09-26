import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<h1>checkout</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
