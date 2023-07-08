import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav nav navbar-nav d-flex flex-row">
              <li >
                <NavLink className="active nav-link" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/">
                  Hot Deals
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Laptops
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Smartphones
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Cameras
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link">
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
