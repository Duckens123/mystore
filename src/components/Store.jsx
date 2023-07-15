import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Store = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [StoreData, setStoreData] = useState();

  useEffect(() => {
    fetchData();
  }, []); // empty dependency array to run the effect only once

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const res = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const jsonData = await response.json();
      const jsonStore = await res.json();
      setStoreData(jsonStore);
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <div id="aside" class="col-md-3">
            <div class="aside">
              <h3 class="aside-title">Categories</h3>
              <div class="checkbox-filter">
                {data.map((item) => (
                  <div class="input-checkbox">
                    <input type="checkbox" name={item} id={item} />
                    <label for="category-1">
                      <span></span>
                      {item}
                      <small>(120)</small>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="store" class="col-md-9">
            <div class="store-filter clearfix">
              <div class="store-sort">
                <label>
                  Sort By:
                  <select class="input-select">
                    <option value="0">Popular</option>
                    <option value="1">Position</option>
                  </select>
                </label>

                <label>
                  Show:
                  <select class="input-select">
                    <option value="0">20</option>
                    <option value="1">50</option>
                  </select>
                </label>
              </div>
              <ul class="store-grid">
                <li class="active">
                  <i class="fa fa-th"></i>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-th-list"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="row">
              {StoreData.map((item) => (
                <Link class="col-md-4 col-xs-6">
                  <div class="product">
                    <div class="product-img">
                      <img src={item.image} alt="" />
                      <div class="product-label">
                        <span class="new">NEW</span>
                      </div>
                    </div>
                    <div class="product-body">
                      <p class="product-category">{item.category}</p>
                      <h3 class="product-name">{item.title.slice(0, 10)}</h3>
                      <h4 class="product-price">
                        ${item.price}{" "}
                        <del class="product-old-price">
                          ${parseInt(item.price) + parseInt(item.price) * 0.3}
                        </del>
                      </h4>
                      <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="bi bi-star"></i>
                      </div>
                      <div class="product-btns">
                        <button class="add-to-wishlist">
                          <i class="fa fa-heart-o"></i>
                          <span class="tooltipp">add to wishlist</span>
                        </button>
                        <button class="add-to-compare">
                          <i class="fa fa-exchange"></i>
                          <span class="tooltipp">add to compare</span>
                        </button>
                        <button class="quick-view">
                          <i class="fa fa-eye"></i>
                          <span class="tooltipp">quick view</span>
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <button class="btn btn-danger mb-2">
                        <i class="fa fa-shopping-cart"></i> add to cart
                      </button>
                    </div>
                  </div>
                </Link>
                
              ))}
            </div>

            <div class="store-filter clearfix">
              <span class="store-qty">Showing 20-100 products</span>
              <ul class="store-pagination">
                <li class="active">1</li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
