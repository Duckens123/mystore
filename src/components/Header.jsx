import React, { useContext } from "react";
import Nav from "./Nav";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Header = () => {
  const {cart} = useContext(CartContext);
  return (
    <>
      <header className="">
        <div id="top-header">
          <div className="container d-flex flex-row justify-content-between">
            <ul className="header-links pull-left">
              <li>
                <a href="/">
                  <i className="fa fa-phone"></i> +50931459861
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="bi bi-envelope"></i> Duckensjacquet@gmail.com
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-map-marker"></i> Port-au-prince, Hait
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right text-end">
              <li>
                <a href="/">
                  <i className="fa fa-dollar"></i> USD
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="bi bi-person-circle"></i> My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav class="navbar bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand text-light">LOGO</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
            <Link
              type="button"
              to="/mycart"
              class="btn btn-dark text-light position-relative me-4 border border-danger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <br />
              Your cart
              <span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </Link>
          </div>
        </nav>
      </header>
      <Nav />
    </>
  );
};

export default Header;
