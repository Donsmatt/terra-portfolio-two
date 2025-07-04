

import RectangleM from "../assets/mobile_dev.png";
import RectangleL from "../assets/web_dev.png";
import RectangleH from "../assets/branding.png";
 import { FaMobileAlt } from "react-icons/fa";
 import { TbWorldCancel, TbBrandAlgolia } from "react-icons/tb";
 import "../styles/work.css";

 

export default function MySkill() {
  return (
    <section className="section">
      <div className="skill__header">
        <h1>My Skills</h1>
        <p>From research to execution, here's what I bring to the table </p>
      </div>
      <div className="skill">
        <div className="skill__card">
          <div>
            <div className="skill__card--image-box">
              <img src={RectangleM} alt="icon" />
            </div>
          </div>
          <div className="skill__card--text">
            <div>
              <span>
                <FaMobileAlt/>
              </span>
              <h4>Mobile app design</h4>
            </div>
            <p>
              I create intuitive, user-friendly mobile experiences that make
              navigation effortless and interactions feel natural. Whether it's
              a sleek app interface or a responsive mobile site, my goal is to
              ensure every tap, swipe, and scroll feels just right.
            </p>
          </div>
        </div>

        <div className="skill__card">
          <div>
            <div className="skill__card--image-box">
              <img src={RectangleL} alt="icon" />
            </div>
          </div>
          <div className="skill__card--text">
            <div>
              <span>
                <TbWorldCancel/>
              </span>
              <h4>Website design </h4>
            </div>
            <p>
              I craft clean, user-friendly, and visually engaging websites that
              keep visitors hooked. From sleek layouts to seamless navigation,
              every pixel is designed with purpose, because a great website
              should feel as good as it looks!
            </p>
          </div>
        </div>

        <div className="skill__card">
          <div>
            <div className="skill__card--image-box">
              <img src={RectangleH} alt="icon" />
            </div>
          </div>
          <div className="skill__card--text">
            <div>
              <span>
                <TbBrandAlgolia/>
              </span>
              <h4>Brand Identity</h4>
            </div>
            <p>
              I create cohesive and memorable brand identities that tell a
              story. From colors to typography, every detail is designed to make
              brands stand out and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

