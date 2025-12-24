import './HyperBadge.css';

const HyperBadge = ({ imageSrc, alt }) => {
  return (
    <div className="hyperbadge-container">
      <div className="hyperbadge">
        <img src={imageSrc} alt={alt} className="hyperbadge-photo" />
        <div className="hyperbadge-glow"></div>
        <div className="hyperbadge-reflection"></div>
        <div className="hyperbadge-border"></div>
      </div>
    </div>
  );
};

export default HyperBadge;
