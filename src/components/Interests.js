import { Container, Row, Col } from "react-bootstrap";
import Reveal from "./Reveal";
import footballIcon from "../assets/img/champ.png";
import rapIcon from "../assets/img/music-icon.svg";
import fifaIcon from "../assets/img/fc.png";
import officeIcon from "../assets/img/tv-icon.svg";

export const Interests = () => {
  const interests = [
    {
      title: "Football",
      description: "Passionate about football, both watching and playing. Big Fc Barcelona club!",
      icon: footballIcon
    },
    {
      title: "Moroccan Rap",
      description: "Enjoy listening to Moroccan rap music and following the scene.",
      icon: rapIcon
    },
    {
      title: "FC",
      description: "I am an FIFA/FC gamer",
      icon: fifaIcon
    },
    {
      title: "The Office",
      description: "Big fan of The Office TV show and its humor.",
      icon: officeIcon
    }
  ];

  return (
    <section className="interests" id="interests">
      <Container>
        <div className="section-head">
          <span className="eyebrow">Beyond work</span>
          <h2 className="section-title">Interests</h2>
          <p className="section-sub">
            A few things I'm passionate about outside of data and code.
          </p>
        </div>
        <Row>
          {interests.map((interest, index) => (
            <Col xs={12} sm={6} xl={3} key={index}>
              <Reveal delay={Math.min(index + 1, 4)}>
                <div className="interest-card">
                  <div className="interest-icon">
                    <img src={interest.icon} alt={interest.title} />
                  </div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Interests;
