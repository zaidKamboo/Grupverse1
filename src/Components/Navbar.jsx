import React, { useState } from "react";
import "./CSS/Navbar.css";
import "./CSS/Dropdown.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import pp from "../Images/pp.png";
import bell from "../Images/bell.png";
import SearchBar from "./Searchbar";
import profile from "../Images/profileAvatar.png";
import ri from "../Images/ri.png";
import mi from "../Images/mi.png";
import si from "../Images/si.png";
import privacy from "../Images/privacy.png";
const Navbar = () => {
  const [dropdownOpenMoreOpt, setDropdownOpenMoreOpt] = useState(false);
  const toggleDropdownMoreOpt = () => {
    setDropdownOpenMoreOpt(!dropdownOpenMoreOpt);
  };
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
            <div
              className="dropdown-container link "
              onMouseLeave={toggleDropdownMoreOpt}
            >
              <div
                className={`dropdown-trigger  navLink ${
                  dropdownOpenMoreOpt ? "open" : ""
                }`}
                onMouseEnter={toggleDropdownMoreOpt}
              >
                <img className="bell" src={bell} alt="bell" />
                <img className="profile" src={profile} alt="profile" />
              </div>
              {dropdownOpenMoreOpt && (
                <div className="dropdown-content dropdown-item">
                  <div className="divdropdownLink">
                    <Link className="drpdnlink mt-3 ml-3" to="/login">
                      <img src={pp} alt="" className="lgi" />
                      Login
                    </Link>
                    <br />
                  </div>
                  <div className="divdropdownLink">
                    <Link className="drpdnlink" to="/signUp">
                      <img src={ri} alt="" className="lgi" />
                      Register
                    </Link>
                    <br />
                  </div>
                  <div className="divdropdownLink">
                    <Link className="drpdnlink" to="/">
                      <img src={mi} alt="" className="lgi" />
                      Terms & Conditions
                    </Link>
                    <br />
                  </div>
                  <div className="divdropdownLink">
                    <Link className="drpdnlink" to="/">
                      <img src={privacy} alt="" className="lgi" />
                      Privacy Policy
                    </Link>
                    <br />
                  </div>
                  <div className="divdropdownLink">
                    <img src={si} alt="" className="lgi" />
                    <Link className="drpdnlink" to="/">
                      Settings
                    </Link>
                    <br />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
