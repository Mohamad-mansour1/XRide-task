import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {
  const isLogged = localStorage.getItem("isLogged");
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [products, setProducts] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();
    const temp = products.map((product) => product);
    temp.push({
      ProductName: productName,
      ProductPrice: productPrice,
      ProductRating: productRating,
    });
    setProducts(temp);
    setProductName("");
    setProductPrice("");
    setProductRating(0);
  };

  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <div>
      <div>
        <form onSubmit={addProduct}>
          <input
            type="text"
            id="productName"
            placeholder="Product Name"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="number"
            id="productPrice"
            placeholder="Product Price"
            required
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <input
            type="text"
            id="productRating"
            placeholder="Product Rating"
            required
            value={productRating}
            onChange={(e) => setProductRating(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="products-container">
        {products.map((product, i) => (
          <ProductCard key={`product_${i}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
