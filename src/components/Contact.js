import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formDetails;

    if (!firstName || !lastName || !email || !message) {
      setStatus({ success: false, message: 'Please fill out all required fields.' });
      return;
    }

    setButtonText("Sending...");

    emailjs.sendForm('service_4edsrpe', 'template_c4xtqkb', e.target, 'dsGBSzJIHqvlFqGzl')
      .then(() => {
        setButtonText("Send Message");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully — thank you!' });
        setTimeout(() => setStatus({}), 4000);
      }, () => {
        setButtonText("Send Message");
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-panel ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <span className="eyebrow">Contact</span>
                  <h2>Let's build something together</h2>
                  <p className="contact-intro">
                    Open to data science, ML engineering, quantitative research, and data
                    engineering opportunities. Have a project or a role in mind? Reach out.
                  </p>
                  <div className="contact-details">
                    <a className="contact-detail" href="mailto:zakaria.akil.2002@gmail.com">
                      <span className="contact-detail-icon"><FiMail /></span>
                      zakaria.akil.2002@gmail.com
                    </a>
                    <a className="contact-detail" href="mailto:zakaria.akil@polytechnique.edu">
                      <span className="contact-detail-icon"><FiMail /></span>
                      zakaria.akil@polytechnique.edu
                    </a>
                    <span className="contact-detail">
                      <span className="contact-detail-icon"><FiMapPin /></span>
                      Luxembourg · Paris
                    </span>
                    <a className="contact-detail" href="https://www.linkedin.com/in/zakaria-akil-79aa9a253/" target="_blank" rel="noopener noreferrer">
                      <span className="contact-detail-icon"><FiLinkedin /></span>
                      linkedin.com/in/zakaria-akil
                    </a>
                    <a className="contact-detail" href="https://github.com/zakil-02" target="_blank" rel="noopener noreferrer">
                      <span className="contact-detail-icon"><FiGithub /></span>
                      github.com/zakil-02
                    </a>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name*" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name*" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address*" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message*" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col className="com-message px-1">
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
