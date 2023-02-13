import RatingStars from "../RatingStars/RatingStarts";

function ProductCard({ product }) {
  return (
    <div className="product-item">
      <span>{product.ProductName}</span>
      <span>{product.ProductPrice}</span>
      <RatingStars value={+product.ProductRating} />
    </div>
  );
}

export default ProductCard;
