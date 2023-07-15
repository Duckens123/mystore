import { React, useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { CartContext, CartProvider } from "./CartContext";

const ProductDesc = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const { addToCart } = useContext(CartContext);
  const [quantity, setquantity] = useState(1)
const handleChange = (event) =>{
    setquantity(event.target.value)
}
const increment = () => {
    setquantity(parseInt(quantity) + 1);
  };

  const decrement = () => {
    if(parseInt(quantity)===1){
        return;
    }
    setquantity(parseInt(quantity) - 1);
  };

  return (
    <>
      <CartProvider>
        <div className="col-md-6">
          <Slider
            id="product-main-img"
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            <div class="product-preview">
              <img
                src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/825d33b9f25a4a69b2baac4600ea0e04_9366/essentials-big-logo-t-shirt.jpg"
                alt=""
              />
            </div>
            <div class="product-preview">
              <img
                src="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_652965_al&qlt=85&offer_81=1&qlt=92&w=320&h=320&v=1&fmt=auto"
                alt=""
              />
            </div>
            <div class="product-preview">
              <img
                src="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_652965_al&qlt=85&offer_81=1&qlt=92&w=320&h=320&v=1&fmt=auto"
                alt=""
              />
            </div>
          </Slider>
          <Slider
            id="product-imgs"
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div class="product-preview">
              <img
                src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/825d33b9f25a4a69b2baac4600ea0e04_9366/essentials-big-logo-t-shirt.jpg"
                alt=""
              />
            </div>

            <div class="product-preview">
              <img
                src="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_652965_al&qlt=85&offer_81=1&qlt=92&w=320&h=320&v=1&fmt=auto"
                alt=""
              />
            </div>
            <div class="product-preview">
              <img
                src="https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_652965_al&qlt=85&offer_81=1&qlt=92&w=320&h=320&v=1&fmt=auto"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div class="col-md-6">
          <div class="product-details">
            <h2 class="product-name">{props.title}</h2>
            <div>
              <div class="product-rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <Link class="review-link" to="#">
                {props.rating} Review(s) | Add your review
              </Link>
            </div>
            <div>
              <h3 class="product-price">
                ${props.price}{" "}
                <del class="product-old-price">${props.price}</del>
              </h3>
              <span class="product-available">In Stock</span>
            </div>
            <p>{props.description}</p>
            <div class="product-options">
              <label>
                Size
                <select class="input-select">
                  <option value="0">X</option>
                </select>
              </label>
              <label>
                Color
                <select class="input-select">
                  <option value="0">Red</option>
                </select>
              </label>
            </div>

            <div class="add-to-cart">
              <div class="qty-label">
                Qty
                <div class="input-number">
                  <input type="number" value={quantity} onChange={handleChange}/>
                  <span class="qty-up" onClick={increment}>+</span>
                  <span class="qty-down" onClick={decrement}>-</span>
                </div>
              </div>
              <button
                class="add-to-cart-btn"
                onClick={() =>
                  addToCart({
                    id: props.id,
                    name: props.title,
                    price: props.price,
                    quantity: quantity,
                  })
                }
              >
                <i class="fa fa-shopping-cart"></i> add to cart
              </button>
            </div>

            <ul class="product-btns">
              <li>
                <Link to="#">
                  <i class="fa fa-heart-o"></i> add to wishlist
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa fa-exchange"></i> add to compare
                </Link>
              </li>
            </ul>

            <ul class="product-links">
              <li>Category:</li>
              <li>
                <Link to="#">Headphones</Link>
              </li>
              <li>
                <Link href="#">Accessories</Link>
              </li>
            </ul>

            <ul class="product-links">
              <li>Share:</li>
              <li>
                <a href="facebook.com/duckensonjacquet">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="twitter.com/duckens123">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="gmail.com">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </CartProvider>
    </>
  );
};

export default ProductDesc;
