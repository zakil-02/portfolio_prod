import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../App.css';
import telecomLogo from '../assets/img/telecom_new.png';
import epolyLogo from '../assets/img/epoly.png';
import cpgeLogo from '../assets/img/lm6e.png';


export const EducationComponent = () => {
  const [expandedSchool, setExpandedSchool] = useState(null);

  const toggleExpand = (index) => {
    if (expandedSchool === index) {
      setExpandedSchool(null);
    } else {
      setExpandedSchool(index);
    }
  };

  const schools = [
    {
      name: "École Polytechnique",
      degree: "MSc Data Science (M2DS)",
      duration: "2024 - 2025",
      location: "Palaiseau, France",
      logo: epolyLogo,
      courses: [
        "Hidden Markov Models",
        "Big Data Framework",
        "Data Stream Processing",
        "NLP",
        "Cooperative Optimization",
        "Optimal Transport",
        "Reinforcement Learning",
        "Operator Learning",
        "ML for Graphs",
        "Stochastic Calculus (M2MO MSc)",
        "Financial Time Series (M2MO MSc)",
        "ML for Finance (M2MO MSc)"
      ]
    },
    {
      name: "Télécom Paris",
      degree: "Master of Engineering",
      duration: "2022 - 2025",
      location: "Paris, France",
      logo: telecomLogo,
      description: "Pursued a double major: Signal Processing for AI/Data Science, Computer Vision",
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Generative Models",
        "Databases",
        "Advanced Statistics",
        "Optimization",
        "Competitive Programming",
        "Time Series",
        "Queueing Theory",
        "Information Theory"
      ]
    },
    {
      name: "CPGE LM6E (Ex Lydex Benguerir)",
      degree: "Scientific Preparatory Classes",
      duration: "2020 - 2022",
      location: "Benguerir, Morocco",
      logo: cpgeLogo,
      description: "Two years of intensive preparation for entrance exams to top French engineering schools"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className="section-title text-center mb-5">Academic Background</h2>
          </Col>
        </Row>
        
        <Row className="g-4">
          {schools.map((school, index) => (
            <Col xs={12} key={index}>
              <Card className="education-card">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={12} md={3} className="mb-4 mb-md-0">
                      <div className="education-logo-container">
                        <img 
                          src={school.logo} 
                          alt={school.name} 
                          className={`education-logo ${school.name === "Télécom Paris" ? "telecom-logo" : ""}`} 
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={9}>
                      <div className="education-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="education-institution">{school.name}</h3>
                            <h4 className="education-degree">{school.degree}</h4>
                          </div>
                          <div className="education-meta">
                            <div className="education-meta-item">
                              <FiCalendar className="education-icon" />
                              <span>{school.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        {school.description && (
                          <p className="education-description mt-2">{school.description}</p>
                        )}
                        
                        {school.courses && (
                          <div className="mt-3">
                            <button 
                              className="toggle-courses-btn"
                              onClick={() => toggleExpand(index)}
                              aria-expanded={expandedSchool === index}
                            >
                              {expandedSchool === index ? (
                                <>Hide Courses <FiChevronUp /></>
                              ) : (
                                <>Show Courses <FiChevronDown /></>
                              )}
                            </button>
                            
                            {expandedSchool === index && (
                              <div className="courses-container mt-3">
                                <h5 className="courses-title">Relevant Coursework</h5>
                                <Row>
                                  {school.courses.map((course, i) => (
                                    <Col xs={12} md={6} lg={4} key={i}>
                                      <div className="course-item">
                                        <span className="course-bullet">•</span>
                                        {course}
                                      </div>
                                    </Col>
                                  ))}
                                </Row>
                              </div>
                            )}
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
    </section>
  );
};

export default EducationComponent;
