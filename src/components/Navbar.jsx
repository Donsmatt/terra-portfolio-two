export default function Navbar() {
  return (
    <nav>
      <div className="navbar container">
        <h1 className="navbar__logo">
          <span className="ff-accent">By Jesse</span> Product Designer
        </h1>
        <div className="navbar__items">
          <ul className="navbar__list">
            <li>Work</li>
            <li>About Me</li>
            <li>Skills</li>
          </ul>
          <div className="btn-container">
            <button className="navbar__btn">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
