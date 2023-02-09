import React from "react";
import { Link } from "react-router-dom";
import "../App.css"


const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg " style={{backgroundColor:props.mode==="light"?'white':'#3d3d41'}}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode==="light"?'dark':'light'}`} style={{color: "white",
    fontWeight:'700'}} to="/">
            NewsPenguin
          </Link>
          <button
            className={`navbar-toggler text-${props.mode==="light"?'dark':'light'}`}
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
                  style={{ fontWeight:'700', backgroundColor:props.mode==="light"?'white':'#3d3d41',color:props.mode==="light"?'black':'white'}}
                >
                  Categories
                </Link>

                <ul className="dropdown-menu" style={{backgroundColor:props.mode==="light"?'white':'#20395b',color:props.mode==="light"?'black':'white'}}>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/general">
                      general
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/sports">
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/business">
                      business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/science">
                      science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/entertainment">
                      entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/technology">
                      technology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ne"  style={{color:props.mode==="light"?'black':'white'}} to="/health">
                      health
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toogle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
