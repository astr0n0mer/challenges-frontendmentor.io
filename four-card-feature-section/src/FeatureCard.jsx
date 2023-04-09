import "./css/FeatureCard.css";

export default function FeatureCard({
  title,
  subtitle,
  img,
  className,
  color,
}) {
  return (
    <figure
      className={`card ${className ?? ""}`}
      style={{ "--clr-accent": color }}
    >
      <figcaption className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__subtitle">{subtitle}</p>
      </figcaption>
      <img src={img} alt={title} className="card__img" />
    </figure>
  );
}
