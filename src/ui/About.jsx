import userImg from "../assets/user_img.png";

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about-content">
        <h3 className="about-title">
          👋Hey i'm <span className="bold">Jesse Okafor.</span>
        </h3>
        <span className="about-span">
          Product Design lead <span className="bold">@ paystack</span>
        </span>
        <p className="about-text">
          I spend my days crafting experiences that make users go "Wow!" instead
          of "How do I exit this?" From intuitive interfaces to smooth
          interactions, I design with clarity, creativity, and just a little bit
          of obsessive attention to detail. Let’s turn ideas into designs people
          actually love to use!
        </p>
        <button className="about-button">Download resume</button>
      </div>
      <div className="about-image-container">
        <img src={userImg} alt="Jesse Okafor" className="about-image" />
      </div>
    </section>
  );
};

export default About;
