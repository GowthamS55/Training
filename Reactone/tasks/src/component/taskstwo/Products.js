import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res); 
      });
  }, []);

  useEffect(() => {
    console.log("Updated Products:", products); 
  }, [products]); 

  return (
    <div className="container">
      <h1 className="text-center my-4">Product Details</h1>
      <div className="row">
        {products.length > 0 && 
          products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <p className="card-text"><strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
                  <a href="{product.id}" className="btn btn-primary">BUY NOW</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Products;
