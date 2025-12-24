import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import { projects } from "../data/projects_data";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiImage, FiFileText, FiLink } from 'react-icons/fi';
import ImageCarousel from "./ImageCarousel";
import '../App.css';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  const handleReportClick = (reportLink) => {
    if (reportLink) {
      // Open PDF in new window
      window.open(reportLink, '_blank');
    }
  };

  return (
    <section className="projects-section" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className="section-title text-center mb-5">Projects Portfolio</h2>
          </Col>
        </Row>
        
        <Row className="g-4">
          {projects.map((project) => (
            <Col xs={12} key={project.id}>
              <Card className="project-card">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                      <div className="project-image-container">
                        <img 
                          src={project.imgUrls[0]} 
                          alt={project.title} 
                          className="project-image" 
                          onClick={() => handleProjectClick(project)}
                        />
                        <div className="project-image-overlay">
                          <FiImage className="view-images-icon" />
                          <span>View Images</span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={8}>
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        
                        <div className="project-description">
                          <p>{project.description}</p>
                        </div>
                        
                        <div className="project-tags mb-3">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} className="project-tag custom-badge" bg="dark">{tag}</Badge>
                          ))}
                        </div>
                        
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
                          <button 
                            className="toggle-details-btn"
                            onClick={() => toggleExpand(project.id)}
                            aria-expanded={expandedProject === project.id}
                          >
                            {expandedProject === project.id ? (
                              <>Hide Details <FiChevronUp /></>
                            ) : (
                              <>Show Details <FiChevronDown /></>
                            )}
                          </button>
                        </div>
                        
                        {expandedProject === project.id && (
                          <div className="project-details mt-3">
                            <h5 className="details-title">Project Details</h5>
                            <p>{project.longDescription}</p>
                            
                            <div className="project-resources mt-3">
                              <div className="resource-item">
                                <strong>Report:</strong>
                                {project.reportLink ? (
                                  <button 
                                    className="resource-link"
                                    onClick={() => handleReportClick(project.reportLink)}
                                    style={{ color: '#FF8C00' }}
                                  >
                                    <FiFileText /> View Report
                                  </button>
                                ) : (
                                  <span className="resource-placeholder">Coming soon</span>
                                )}
                              </div>
                              
                              <div className="resource-item">
                                <strong>Reference:</strong>
                                {project.referenceLink ? (
                                  <a 
                                    href={project.referenceLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    style={{ color: '#FF8C00' }}
                                  >
                                    <FiLink /> View Reference
                                  </a>
                                ) : (
                                  <span className="resource-placeholder">Coming soon</span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
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
                <h5>Project Description</h5>
                <p>{selectedProject.longDescription || selectedProject.description}</p>
                
                <div className="project-tags mb-3">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} className="project-tag custom-badge" bg="dark">{tag}</Badge>
                  ))}
                </div>
                
                <div className="project-modal-links mb-3">
                  {selectedProject.codeLink && (
                    <Button 
                      href={selectedProject.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="outline-light"
                      className="me-2"
                    >
                      <FiGithub className="me-2" /> View Code
                    </Button>
                  )}
                  {selectedProject.demoLink && (
                    <Button 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="outline-light"
                    >
                      <FiExternalLink className="me-2" /> Live Demo
                    </Button>
                  )}
                </div>

                <div className="project-resources">
                  <div className="resource-item">
                    <strong>Report:</strong>
                    {selectedProject.reportLink ? (
                      <button 
                        className="resource-link"
                        onClick={() => handleReportClick(selectedProject.reportLink)}
                        style={{ color: '#FF8C00' }}
                      >
                        <FiFileText /> View Report
                      </button>
                    ) : (
                      <span className="resource-placeholder">Coming soon</span>
                    )}
                  </div>
                  
                  <div className="resource-item">
                    <strong>Reference:</strong>
                    {selectedProject.referenceLink ? (
                      <a 
                        href={selectedProject.referenceLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="resource-link"
                        style={{ color: '#FF8C00' }}
                      >
                        <FiLink /> View Reference
                      </a>
                    ) : (
                      <span className="resource-placeholder">Coming soon</span>
                    )}
                  </div>
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
