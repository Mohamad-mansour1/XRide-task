import ReactStars from "react-rating-stars-component";

function RatingStars({ value }) {
  return (
    <ReactStars
      count={5}
      value={value}
      isHalf
      size={24}
      activeColor="#ffd700"
    />
  );
}

export default RatingStars;
