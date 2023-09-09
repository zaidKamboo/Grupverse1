import React from "react";
import "./CSS/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import bell from "../Images/bell.png";
import SearchBar from "./Searchbar";
import profile from "../Images/profileAvatar.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} className="logo" alt="logo" />
          <Link className="navbar-brand" to="/">
            Group Verse
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto center mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  Help
                </Link>
              </li>
            </ul>
            <SearchBar />
            <img className="bell" src={bell} alt="bell" />
            <img className="profile" src={profile} alt="profile" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
