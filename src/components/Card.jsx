

export default function Card({ img, children, className }) {
    return (
      <div className={`card ${className}`}>
        <img className="card__img" src={img} alt={name} />
        <div>
          {children}
        </div>
      </div>
    );
  };





