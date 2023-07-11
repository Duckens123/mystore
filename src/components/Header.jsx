import React from "react";
import Nav from "./Nav";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
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

        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="/" className="logo">
                    <img src="./img/logo.png" alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="header-search">
                  <form>
                    <select className="input-select me-0 mt-0">
                      <option value="0">All Categories</option>
                      <option value="1">Category 01</option>
                      <option value="1">Category 02</option>
                    </select>
                    <input className="input" placeholder="Search here" />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>

              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  <div>
                    <a href="/">
                      <i className="bi bi-bag-heart"></i>
                      <span>Your Wishlist</span>
                      <div className="qty">2</div>
                    </a>
                  </div>

                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="bi bi-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="/">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">1x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="/">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">3x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="/">View Cart</a>
                        <a href="/">
                          Checkout <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <button
                    class="navbar-toggler text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="bi bi-list fw-bolder"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
};

export default Header;
