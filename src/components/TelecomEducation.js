import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../App.css';
import Reveal from './Reveal';
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
        <div className="section-head">
          <span className="eyebrow">Academics</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-sub">
            Graduate training in data science, statistics, and signal processing across two of France's
            leading engineering schools.
          </p>
        </div>

        <Row className="g-4">
          {schools.map((school, index) => (
            <Col xs={12} key={index}>
              <Reveal delay={Math.min(index + 1, 3)}>
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
                        <h3 className="education-institution">{school.name}</h3>
                        <h4 className="education-degree">{school.degree}</h4>
                        <div className="education-meta">
                          <div className="education-meta-item">
                            <FiCalendar className="education-icon" />
                            <span>{school.duration}</span>
                          </div>
                          {school.location && (
                            <div className="education-meta-item">
                              <FiMapPin className="education-icon" />
                              <span>{school.location}</span>
                            </div>
                          )}
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
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EducationComponent;
