import Card from "./Card";
import RectangleImg from "../assets/magnet_img.png";
import RectangleImg1 from "../assets/makko_img.png";
import RectangleImg2 from "../assets/wallet_img.png";
import "../styles/work.css";


export default function Work() {
  return (
      <section className="section">
        <div className="row">
          <div className="section__content">
            <h2 className="section__title">
              <span>Selected</span>
              <span>Work</span>
            </h2>
            <p className="section__text">
              Every product is designed with the user in mind, ensuring every
              decision creates a seamless experience
            </p>
          </div>
          <div className="section__cards">
            <Card img={RectangleImg1}>
              <h4>Makko</h4>
              <p>Live room streaming platform</p>
            </Card>
            <Card img={RectangleImg2}>
              <h4>Wallet</h4>
              <p>Modern crypto trading app</p>
            </Card>
            <Card className="card__full" img={RectangleImg}>
              <h4>Magnet</h4>
              <p>Startup job finder</p>
            </Card>
          </div>
        </div>
      </section>
  );
}