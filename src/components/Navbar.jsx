import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar container">
        <Link to="home" smooth duration={500}>
          <h1 className="navbar__logo">
            <span className="ff-accent">By Jesse</span> Product Designer
          </h1>
        </Link>
        <div className="navbar__items">
          <ul className="navbar__list">
            <li>
              <Link to="work" smooth duration={500}>
                Work
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="skills" smooth duration={500}>
                Skills
              </Link>
            </li>
          </ul>
          <div className="btn-container">
            <Link to="contact" smooth duration={500}>
              <button className="navbar__btn">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
