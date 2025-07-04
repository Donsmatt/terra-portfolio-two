import PropTypes from "prop-types";
import "../styles/SliderCard.css"

const SliderCard = ({ img, imgAlt, align = "center" }) => {
  return (
    <div className={`slider__card ${align}`}>
      <img src={img} alt={imgAlt} className="slider__card-img" />
    </div>
  );
};

SliderCard.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["start", "center", "end"]),
};

export default SliderCard;
