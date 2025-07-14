import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewProduct = () => {
  const [productData, changeData] = useState({
    products: [],
  });

  const fetchData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        changeData(response.data);
      })
      .catch();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container">
        <h4 className="mt-4">View All Products</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {productData.products.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card">
                      <img src={value.images} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">{value.description}</p>
                        <a href="#" class="btn btn-primary">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
