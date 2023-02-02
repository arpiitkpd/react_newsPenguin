import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg " style={{background: "#000000c4"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color: "white",
    fontWeight:'700'}} to="/">
            NewsPenguin
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="dropdown">
                <Link
                  className="nav-link active"
                  data-bs-toggle="dropdown"
                  aria-current="page"
                  to="/about"
                  style={{color: "white",
                  fontWeight:'700'}}
                >
                  Categories
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/general">
                      general
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/business">
                      business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      technology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      health
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
