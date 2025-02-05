import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import { ProductContext } from "../App";

const Home = () => {
  const { products, setId } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleBuyClick = (productId) => {
    setId(productId);
    navigate("/detail");
  };

  return (
    <>
      <Navbar />
      <div>
        <style>
          {`
            .product-grid {
  display: grid;
    grid-template-columns: auto auto auto auto;

  gap: 20px;
  padding: 20px;
  justify-content: center;
  background: #fff;
}

.product-card {
  display: flex;
  justify-content: center;
}

.card {
  background-color: #fff;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}


.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f5f5f5;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.card-body h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #222;
}

.card-body p {
  font-size: 1rem;
  color: #444;
  margin-bottom: 15px;
}

.card-body button {
  padding: 10px 15px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

          `}
        </style>

        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>

                  <button
                    type="button"
                    onClick={() => handleBuyClick(item.id)}
                    style={{
                      padding: "10px",
                      background: "#FF9900",
                      border: "none",
                    }}
                  >
                    Buy Now{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
