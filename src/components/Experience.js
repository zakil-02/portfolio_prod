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
      position: "BI Engineer I",
      duration: "December 2025 - present",
      location: "Luxembourg",
      description: [
        "Leading Agentic AI integration in a high-impact product in European network transformation",
        "Building production-scale AWS infrastructures, data pipelines, and analytics solutions using infrastructure as code",
        "Built and deployed a real-time data pipeline on SNS, SQS, AWS Redshift, and Airflow to power a network change monitoring dashboard — cutting data latency from 3–5 hours to ~20 minutes and fully eliminating a manual refresh workflow"
      ],
      logo: amazonLogo,
      technologies: ["AWS CDK", "GenAI", "Python", "TypeScript", "SQL", "SNS", "SQS", "Redshift", "Airflow"]
    },
    {
      company: "Amazon",
      position: "BI/Data Engineer Intern",
      duration: "April 2025 - October 2025",
      location: "Luxembourg",
      description: [
        "Master's thesis: Developed warehouse closure forecasting system across 5 European countries using probabilistic and hazard-based models; achieved PR-AUC of 0.90 and F1 of 0.84 for next-day risk prediction, PR-AUC of 0.99 and F1 of 0.97 for early alerting",
        "Contributed to a fully automated AWS pipeline (CDK, Lambda, Airflow, Step Functions, QuickSight) replacing manual performance review processes, reducing reporting latency from days to hours while establishing single source of truth"
      ],
      logo: amazonLogo,
      technologies: ["Machine Learning", "AWS CDK", "AWS Lambda", "Python", "SQL", "ETL", "Airflow", "Step Functions"]
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
      company: "Talan",
      position: "Software Engineer Intern",
      duration: "July 2023",
      location: "Tunis, Tunisia",
      description: [
        "Fine-tuned MobileNet model for material recognition from images, achieving high accuracy on a balanced dataset",
        "Delivered the model for integration into a production Android application and led the presentation of the tool to the founder & president of the Talan group"
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
