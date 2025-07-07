import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import '../App.css';
import amazonLogo from '../assets/img/amazon.png';
import lorealLogo from '../assets/img/loreal.png';
import talanLogo from '../assets/img/talan.png';
import completudeLogo from '../assets/img/completude.png';

export const Experience = () => {
  const experiences = [
    {
      company: "Amazon",
      position: "Business Intelligence Engineer",
      duration: "April 2025 - present",
      location: "Luxembourg",
      description: [
        "Architected end-to-end ETL pipelines using Airflow DAG, AWS S3, and AWS Lambda, automating critical business metrics reporting for senior stakeholders",
        "Led development of an ML-powered analytics solution for global warehouse closure management, implementing forecasting models via AWS SageMaker to predict warehouse closure",
        "Developed ESMM Assistant, an innovative LLM-based application trained on GAN-augmented historical routes and simulation data that aims in explaining routes simulations failures"
      ],
      logo: amazonLogo,
      technologies: ["Python", "AWS", "Airflow", "ETL", "Machine Learning", "SageMaker", "LLM"]
    },
    {
      company: "L'Oréal",
      position: "Data Scientist - Capstone Project",
      duration: "January 2025 - March 2025",
      location: "Paris, France",
      description: [
        "Developed an automated multilingual keyword extraction pipeline to enhance topic classification in L'Oréal's Consumer Loop platform",
        "Applied Sentence-BERT embeddings, outlier detection, and clustering techniques for initial exploration",
        "Implemented and optimized KeyBERT for scalable keyword discovery, achieving a 70% positivity rate",
        "Improved coverage of emerging consumer language and designed novel evaluation metrics combining exact and semantic keyword coverage"
      ],
      logo: lorealLogo,
      technologies: ["Python", "NLP", "BERT", "KeyBERT", "Clustering", "Multilingual Analysis"]
    },
    {
      company: "Talan Corporate",
      position: "Software Consulting Intern",
      duration: "July 2023",
      location: "Tunis, Tunisia",
      description: [
        "Fine-tuned MobileNet model to recognize construction materials from images, achieving an accuracy score of 85%",
        "Implemented computer vision techniques for image preprocessing and feature extraction",
        "Collaborated with development team to integrate the model into the company's software ecosystem"
      ],
      logo: talanLogo,
      technologies: ["Python", "TensorFlow", "MobileNet", "Computer Vision", "Image Recognition"]
    },
    {
      company: "Complétude",
      position: "Independent Tutor",
      duration: "September 2023 - July 2024",
      location: "Paris, France",
      description: [
        "Provided personalized tutoring sessions in mathematics, physics, and Arabic",
        "Developed customized learning materials to address individual student needs",
        "Helped students improve academic performance and build confidence in challenging subjects"
      ],
      logo: completudeLogo,
      technologies: ["Mathematics", "Physics", "Arabic", "Education", "Tutoring"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className="section-title text-center mb-5">Professional Experience</h2>
          </Col>
        </Row>
        
        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col xs={12} key={index}>
              <Card className="experience-card">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={12} md={3} className="mb-4 mb-md-0">
                      <div className="experience-logo-container">
                        <img src={exp.logo} alt={exp.company} className="experience-logo" />
                      </div>
                    </Col>
                    <Col xs={12} md={9}>
                      <div className="experience-header">
                        <h3 className="experience-position">{exp.position}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                        
                        <div className="experience-meta">
                          <div className="experience-meta-item">
                            <FiCalendar className="experience-icon" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="experience-meta-item">
                            <FiMapPin className="experience-icon" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="experience-description">
                        <ul>
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="experience-technologies">
                        <h5>Technologies:</h5>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
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

export default Experience;
