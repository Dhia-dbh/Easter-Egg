import React from "react";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";
import "./navBar.css";

function NavBar({ onSearch, night_shop_logo, MUIchecked, onMUIChange }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={night_shop_logo} alt="Logo" width="30%" />
        </a>
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
        <div
          className="collapse navbar-collapse navbar-custom"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li key="Home" className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              key="About"
              className="nav-item"
              onClick={() => navigate("/about")}
            >
              <a className="nav-link">About</a>
            </li>
          </ul>
          <Switch
            onChange={onMUIChange}
            checked={MUIchecked}
            offColor="#fff"
            onColor="#000"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                }}
              >
                ☀️
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                }}
              >
                🌚
              </div>
            }
          />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onSearch}
            />
          </form>
        </div>
        <div className="d-flex">
          <a href="#" className="btn btn-outline-success">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
