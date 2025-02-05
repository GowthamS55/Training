import { useContext } from "react";
import Navbar from "./component/Navbar";
// import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";
import './Detail.css'

const Detail = () => {
  const { products, id, cardData, setCarddata } = useContext(ProductContext);

  //  const Addcard  = createContext();

  const selectedProduct = products.filter((product) => product.id === id)[0];
  console.log(selectedProduct);
  // const navigate = useNavigate();
  const handleaddClick = () => {
    setCarddata((preData) => [...preData, selectedProduct]);
    alert("Rightuuu mameeeeeeeee!!!");
    // navigate("/product");
  };
  console.log(cardData);

  return (
    <>
      <Navbar />
      <h1>Product Details</h1>
      {selectedProduct && (
  <div className="product-details">
    <h2>{selectedProduct.title}</h2>
    <img src={selectedProduct.image} alt={selectedProduct.title} />
<bold>    <p className="price">Price: ${selectedProduct.price}</p></bold>
    <p>{selectedProduct.description}</p>
  

          <button
            type="button"
            onClick={() => {
              handleaddClick();
            }}
            style={{ padding: "10px", background: "#FF9900", border: "none" }}
          >
            {" "}
            Add to Card{" "}
          </button>
        </div>
      )}
    </>
  );
};
export default Detail;
