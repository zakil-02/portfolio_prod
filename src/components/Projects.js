import { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import { projects } from "../data/projects_data";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiImage, FiFileText, FiLink } from 'react-icons/fi';
import ImageCarousel from "./ImageCarousel";
import Reveal from './Reveal';
import '../App.css';

// Category assignment by project id (data-driven, kept close to the UI).
const CATEGORY_BY_ID = {
  1: "Data & Systems",
  2: "Machine Learning",
  3: "Quant & Finance",
  4: "Machine Learning",
  5: "Quant & Finance",
  6: "Machine Learning",
  7: "Machine Learning",
  8: "Machine Learning",
  9: "Machine Learning",
  10: "Data & Systems",
  11: "Machine Learning",
  12: "Machine Learning",
  13: "Data & Systems",
  14: "Data & Systems",
  15: "Quant & Finance",
  16: "Machine Learning",
};

const CATEGORIES = ["All", "Machine Learning", "Quant & Finance", "Data & Systems"];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const catProjects = useMemo(
    () => projects.map((p) => ({ ...p, category: CATEGORY_BY_ID[p.id] || "Machine Learning" })),
    []
  );

  const filtered = useMemo(
    () => (activeFilter === "All" ? catProjects : catProjects.filter((p) => p.category === activeFilter)),
    [activeFilter, catProjects]
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const handleReportClick = (reportLink) => {
    if (reportLink) {
      window.open(reportLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="projects-section" id="projects">
      <Container>
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-sub">
            Research, machine-learning, and engineering projects spanning data science,
            quantitative finance, and applied AI.
          </p>
        </div>

        <div className="project-filters" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat}
              className={`project-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <Row className="g-4">
          {filtered.map((project) => (
            <Col xs={12} md={6} key={project.id}>
              <Reveal>
                <Card className="project-card">
                  <div
                    className="project-image-container"
                    onClick={() => handleProjectClick(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View gallery for ${project.title}`}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleProjectClick(project); }}
                  >
                    {project.featured && <span className="project-featured-badge">Featured</span>}
                    <img src={project.imgUrls[0]} alt={project.title} className="project-image" loading="lazy" />
                    <div className="project-image-overlay">
                      <FiImage className="view-images-icon" />
                      <span>View gallery</span>
                    </div>
                  </div>
                  <Card.Body>
                    <h3 className="project-title">{project.title}</h3>

                    <div className="project-tags">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <Badge key={i} className="project-tag custom-badge" bg="dark">{tag}</Badge>
                      ))}
                    </div>

                    <p className="project-description">{project.description}</p>

                    {expandedProject === project.id && (
                      <div className="project-details">
                        <h5 className="details-title">Project Details</h5>
                        <p>{project.longDescription}</p>
                        <div className="project-resources">
                          <div className="resource-item">
                            <strong>Report:</strong>
                            {project.reportLink ? (
                              <button className="resource-link" onClick={() => handleReportClick(project.reportLink)}>
                                <FiFileText /> View
                              </button>
                            ) : (
                              <span className="resource-placeholder">Coming soon</span>
                            )}
                          </div>
                          <div className="resource-item">
                            <strong>Reference:</strong>
                            {project.referenceLink ? (
                              <a href={project.referenceLink} target="_blank" rel="noopener noreferrer" className="resource-link">
                                <FiLink /> View
                              </a>
                            ) : (
                              <span className="resource-placeholder">Coming soon</span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="project-footer">
                      <div className="project-links">
                        {project.codeLink && (
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FiGithub /> Code
                          </a>
                        )}
                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FiExternalLink /> Demo
                          </a>
                        )}
                        {project.reportLink && (
                          <button className="project-link" onClick={() => handleReportClick(project.reportLink)}>
                            <FiFileText /> Report
                          </button>
                        )}
                      </div>
                      <button
                        className="toggle-details-btn"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={expandedProject === project.id}
                      >
                        {expandedProject === project.id ? (
                          <>Less <FiChevronUp /></>
                        ) : (
                          <>Details <FiChevronDown /></>
                        )}
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ImageCarousel images={selectedProject.imgUrls} />
              <div className="mt-4">
                <h5>Overview</h5>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                <div className="project-tags mb-3">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} className="project-tag custom-badge" bg="dark">{tag}</Badge>
                  ))}
                </div>

                <div className="project-modal-links mb-3">
                  {selectedProject.codeLink && (
                    <Button href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" variant="outline-light">
                      <FiGithub className="me-2" /> View Code
                    </Button>
                  )}
                  {selectedProject.demoLink && (
                    <Button href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" variant="outline-light">
                      <FiExternalLink className="me-2" /> Live Demo
                    </Button>
                  )}
                  {selectedProject.reportLink && (
                    <Button onClick={() => handleReportClick(selectedProject.reportLink)} variant="outline-light">
                      <FiFileText className="me-2" /> Report
                    </Button>
                  )}
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
