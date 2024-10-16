import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <nav>
          <a href="/">Home</a> | <a href="/products">Products</a>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:category" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
