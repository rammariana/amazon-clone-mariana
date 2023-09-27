import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
