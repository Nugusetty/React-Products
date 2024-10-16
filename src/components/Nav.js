import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="NavContiner">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="./Login.js">
            <img
              src="https://www.achieversit.com/assets/images/logo-white.png"
              alt="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products">
                  All Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products/Electronics">
                  Electronics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products/Clothing">
                  Clothing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/products/Accessories">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
