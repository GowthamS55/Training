import React, { useContext } from "react";
import Navbar from "./component/Navbar";
import { ProductContext } from "../App";
import './Detail.css'

const Product = () => {
  const { carddata, setCarddata, addToCart } = useContext(ProductContext);
  console.log(carddata);


  const handleDelete = (id) => {
    const updatedCart = carddata.filter((item) => item.id !== id);
    setCarddata(updatedCart);
  };

  

  return (
    <div>
      <Navbar />
      <center>
        <h1>Cart</h1>
      </center>
      {carddata.map((item) => (
        <div key={item.id} className="product-details" >
          <h2>{item.title}</h2>
          <img
            src={item.image}
            alt={item.title}
            width="200"
            style={{ objectFit: "contain", borderRadius: "8px" }}
          />
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
          <button onClick={() => handleDelete(item.id)}>Remove</button>
        </div>
        
      ))}
    </div>
  );
};

export default Product;
