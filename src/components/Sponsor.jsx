import spotify from "../assets/spotify_logo.png";
import interswitch from "../assets/interswitch_group_logo.png";
import netflix from "../assets/netflix_logo.png";
import flutterwave from "../assets/flutterwave_logo.png";
import andela from "../assets/andela_logo.png";
import paystack from "../assets/paystack_logo.png";

import "../styles/Sponsor.css";

const logoData = [
  { img: spotify, imgAlt: "Spotify Logo" },
  { img: interswitch, imgAlt: "Interswitch Logo" },
  { img: netflix, imgAlt: "Netflix logo" },
  { img: flutterwave, imgAlt: "Flutterwave Logo" },
  { img: andela, imgAlt: "Andela Logo" },
  { img: paystack, imgAlt: "Paystack Logo" },
];

const Sponsor = () => {
  return (
    <div className="sponsor">
      <p className="sponsor-text">
        Worked with <span className="bold">5+</span> Companies
      </p>
      <div className="sponsor-image-container">
        {logoData.map((data, index) => (
          <img
            src={data.img}
            alt={data.imgAlt}
            key={index}
            className="sponsor-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
