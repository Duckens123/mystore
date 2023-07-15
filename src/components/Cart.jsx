import { useState } from "react";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { removeFromCart,getItemTotalPrice } = useContext(CartContext);
  const [quantity, setquantity] = useState(item.quantity);
  const [ItemTotalPrice, setItemTotalPrice] = useState(getItemTotalPrice)

  const handleChange = (event) =>{
    setquantity(event.target.value)
    setItemTotalPrice()
}

  return (
    <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center col-md-5">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                class="img-fluid rounded-3"
                alt="Shopping item"
                width={"60px"}
              />
            </div>
            <div class="ms-3">
              <h5>{item.name}</h5>
              <p class="small mb-0">Onyx Black</p>
            </div>
          </div>
          <div class="d-flex flex-row align-items-center col-md-6">
            <div className="col-md-3">
              <input class="fw-normal mb-0 form-control" onChange={handleChange} type="number" value={quantity} name={item.id} id={item.id} />
            </div>
            <div className="col-md-7 m-3">
              <h5 class="mb-0">$ {getItemTotalPrice(item)}</h5>
            </div>
            <button onClick={() => removeFromCart(item)}>
              <i class="fas fa-trash-alt bg-light"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart,calculateTotal } = useContext(CartContext);
  return (
    <section class="h-100 h-custom bg-light">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-lg-9">
                    <h5 class="mb-3">
                      <Link to="/" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                        shopping
                      </Link>
                    </h5>
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p class="mb-1">Shopping cart</p>
                        <p class="mb-0">You have {cart.length} item (s) in your cart</p>
                      </div>
                      <div>
                        <p class="mb-0">
                          <span class="text-muted">Sort by:</span>{" "}
                          <a href="#!" class="text-body">
                            price <i class="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    {cart.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                  <div class="col-lg-3">
                    <div class="card bg-primary text-white rounded-3">
                      <div class="card-body">
                        <p>Summery</p>
                        <hr class="my-4" />

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Subtotal</p>
                          <p class="mb-2">${calculateTotal}</p>
                        </div>

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Shipping</p>
                          <p class="mb-2">$20.00</p>
                        </div>

                        <div class="d-flex justify-content-between mb-4">
                          <p class="mb-2">Total(Incl. taxes)</p>
                          <p class="mb-2">${calculateTotal}</p>
                        </div>

                        <button
                          type="button"
                          class="btn btn-info btn-block btn-lg"
                        >
                          <div class="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i class="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
