import sliderOne from "../assets/slider_one.png";
import sliderTwo from "../assets/slider_two.png";
import sliderThree from "../assets/slider_three.png";
import sliderFour from "../assets/slider_four.png";
import SliderCard from "../components/SliderCard";
import Sponsor from "../components/Sponsor";

const sliderData = [
  {
    img: sliderOne,
    imgAlt: "Slider one image",
    align: "center",
  },
  {
    img: sliderTwo,
    imgAlt: "Slider two image",
    align: "center",
  },
  {
    img: sliderThree,
    imgAlt: "Slider three image",
    align: "start",
  },
  {
    img: sliderFour,
    imgAlt: "Slider four image",
    align: "end",
  },
];

const Slider = () => {
  return (
    <section className="slider">
      <div className="slider-container">
        {sliderData.map((data, index) => (
          <SliderCard
            key={index}
            img={data.img}
            imgAlt={data.imgAlt}
            align={data.align}
          />
        ))}
      </div>
      <Sponsor />
    </section>
  );
};

export default Slider;
