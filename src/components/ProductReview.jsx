import React from "react";
import { Link } from "react-router-dom";

const ProductReview = (props) => {

  const starfill=[];
  for (let i=0;i<parseInt(props.review);i++){
    starfill.push(<i class="fa fa-star"></i>)
  }
  const starblank=[];
  for (let i=0;i<(5-parseInt(props.review));i++){
    starblank.push(<i class="bi bi-star"></i>)
  }


  return (
    <div id="tab3" class="">
      <div class="row">
        <div class="col-md-3">
          <div id="rating">
            <div class="rating-avg">
              <span>{props.review}</span>
              <div class="rating-stars">
                    {starfill}
                    {starblank}
              </div>
            </div>
            <ul class="rating">
              <li>
                <div class="rating-stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="rating-progress">
                  <div></div>
                </div>
                <span class="sum">3</span>
              </li>
              <li>
                <div class="rating-stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <div class="rating-progress">
                  <div></div>
                </div>
                <span class="sum">2</span>
              </li>
              <li>
                <div class="rating-stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <div class="rating-progress">
                  <div></div>
                </div>
                <span class="sum">0</span>
              </li>
              <li>
                <div class="rating-stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <div class="rating-progress">
                  <div></div>
                </div>
                <span class="sum">0</span>
              </li>
              <li>
                <div class="rating-stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <div class="rating-progress">
                  <div></div>
                </div>
                <span class="sum">0</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div id="reviews">
            <ul class="reviews">
              <li>
                <div class="review-heading">
                  <h5 class="name">John</h5>
                  <p class="date">27 DEC 2018, 8:0 PM</p>
                  <div class="review-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o empty"></i>
                  </div>
                </div>
                <div class="review-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </li>
            </ul>
            <ul class="reviews-pagination">
              <li class="active">1</li>
              <li>
                <Link href="#">2</Link>
              </li>
              <li>
                <Link href="#">3</Link>
              </li>
              <li>
                <Link href="#">4</Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div id="review-form">
            <form class="review-form">
              <input class="input" type="text" placeholder="Your Name" />
              <input class="input" type="email" placeholder="Your Email" />
              <textarea class="input" placeholder="Your Review"></textarea>
              <div class="input-rating">
                <span>Your Rating: </span>
                <div class="stars">
                  <input id="star5" name="rating" value="5" type="radio" />
                  <label for="star5"></label>
                </div>
              </div>
              <button class="primary-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
