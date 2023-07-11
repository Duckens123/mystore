import { React, useEffect, useState } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "react-router-dom";

const NewProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // empty dependency array to run the effect only once

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?sort=desc");
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
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  

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
      <Slider
        items={4}
        className="col-md-11"
        {...options}
      >
        {data.slice(0,8).map((item) => (
          <div>
          <Link to={`/product/${item.id}`}>
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
                {item.title.slice(0,10)}
              </h3>
              <h4 class="product-price">
                ${item.price} <del class="product-old-price">${parseInt(item.price)+parseInt(item.price)*0.3}</del>
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
								<button class="btn btn-danger mb-2"><i class="fa fa-shopping-cart"></i> add to cart</button>
                </div>
          </div>
          </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProducts;
