import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDesc from "../components/ProductDesc";
import ProductReview from "../components/ProductReview";
import { Link } from "react-router-dom";

const DisplayProduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Description, setDescription] = useState(true);
  const [Details, setDetails] = useState(false);
  const [Reviews, setReviews] = useState(false);
  const ShowDesc = () => {
    setDetails(false);
    setReviews(false);
    setDescription(true);
  };
  const ShowDetail = () => {
    setDescription(false);
    setReviews(false);
    setDetails(true);
  };
  const showReview = () => {
    setDescription(false);
    setDetails(false);
    setReviews(true);
  };
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []); // empty dependency array to run the effect only once
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
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

  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <ProductDesc
            price={data.price}
            description={data.description}
            rating={data.rating.count}
            title={data.title}
            id={data.id}
          />

          <div class="col-md-12">
            <div id="product-tab">
              <ul class="tab-nav">
                <li class="">
                  <Link onClick={ShowDesc}>Description</Link>
                </li>
                <li>
                  <Link onClick={ShowDetail}>Details</Link>
                </li>
                <li>
                  <Link onClick={showReview}>Reviews ({data.rating.rate})</Link>
                </li>
              </ul>

              <div class="tab-content">
                {Description ? (
                  <p>{data.description}</p>
                ) : Details ? (
                  <p>{data.description}</p>
                ) : (
                  <ProductReview review={data.rating.rate} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
