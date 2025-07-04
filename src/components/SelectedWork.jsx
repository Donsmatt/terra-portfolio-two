import Card from "../components/Card";
import RectangleImg from "../assets/magnet_img.png";
import RectangleImg1 from "../assets/makko_img.png";
import RectangleImg2 from "../assets/wallet_img.png";
import "../styles/work.css";


export default function SelectedWork() {
  return (
    <div className="work__container">
      <section className="section">
      <div className="content">
        <h1 className="content__title">
          <span>Selected</span>
          <span>Work</span>
        </h1>
        <p className="content__paragraph">
          Every product is designed with the user in mind, ensuring every
          decision creates a seamless experience
        </p>
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
      </section>
      
    </div>
  );
}
