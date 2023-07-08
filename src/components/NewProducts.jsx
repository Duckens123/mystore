import { React, useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const NewProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // empty dependency array to run the effect only once

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const jsonData = await response.json();
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

   
    const options= {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    }
  

  return (
    <div>
      <div class="col-md-12">
        <div class="section-title">
          <h3 class="title">New Products</h3>
          <div class="section-nav">
            <ul class="section-tab-nav tab-nav">
              <li class="active">
                <a data-toggle="tab" href="#tab1">
                  Laptops
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tab1">
                  Smartphones
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tab1">
                  Cameras
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tab1">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <OwlCarousel
        items={4}
        className="owl-theme"
        {...options}
      >
        {data.map((item) => (
          <div class="product">
            <div class="product-img">
              <img src={item.image} alt="" />
              <div class="product-label">
                <span class="new">NEW</span>
              </div>
            </div>
            <div class="product-body">
              <p class="product-category">{item.category}</p>
              <h3 class="product-name">
                <a href="#">{item.title}</a>
              </h3>
              <h4 class="product-price">
                ${item.price} <del class="product-old-price">${item.price}</del>
              </h4>
              <div class="product-rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
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
            <div class="add-to-cart">
              <button class="add-to-cart-btn">
                <i class="fa fa-shopping-cart"></i> add to cart
              </button>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default NewProducts;
