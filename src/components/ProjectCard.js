import { memo } from "react";

const ProjectCard = ({ title, description, imgUrls, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="card-image">
        <img 
          src={imgUrls[0]} 
          alt={title}
          loading="lazy"
          className="img-fluid"
        />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="truncate-text">{description}</p>
      </div>
    </div>
  );
};

export default memo(ProjectCard);