import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import footballIcon from "../assets/img/football-icon.svg";
import rapIcon from "../assets/img/music-icon.svg";
import fifaIcon from "../assets/img/game-icon.svg";
import officeIcon from "../assets/img/tv-icon.svg";

export const Interests = () => {
  const interests = [
    {
      title: "Football",
      description: "Passionate about football, both watching and playing.",
      icon: footballIcon
    },
    {
      title: "Moroccan Rap",
      description: "Enjoy listening to Moroccan rap music and following the scene.",
      icon: rapIcon
    },
    {
      title: "FIFA",
      description: "Avid FIFA player and enthusiast of the game series.",
      icon: fifaIcon
    },
    {
      title: "The Office (Dunder Mifflin)",
      description: "Big fan of The Office TV show and its humor.",
      icon: officeIcon
    }
  ];

  return (
    <section className="interests" id="interests">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="section-title">My Interests</h2>
                  <p className="section-description">
                    Beyond my professional life, here are some things I'm passionate about.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          {interests.map((interest, index) => (
            <Col xs={12} md={6} xl={3} key={index}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <div className="interest-card">
                      <div className="interest-icon">
                        <img src={interest.icon} alt={interest.title} />
                      </div>
                      <h3>{interest.title}</h3>
                      <p>{interest.description}</p>
                    </div>
                  </div>
                }
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Interests;
