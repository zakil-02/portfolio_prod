import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/IMG_5468.jpg";
import headerImg from "../assets/img/akilz.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HyperBadge from './HyperBadge';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const tick = useCallback(() => {
    const toRotate = ["Engineering student !"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText;
  
    if (isDeleting) {
      updatedText = text.substring(0, text.length - 1);
    } else {
      updatedText = fullText.substring(0, text.length + 1);
    }
  
    setText(updatedText);
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(5);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Hi! I'm Zakaria</h1>
                  <p>I am currently pursuing a master M2 Data Science (M2DS) at Ecole Polytechnique in parallel with the last year of my Master in Engineering at Telecom Paris. At Telecom Paris, I am pursuing a double major in Signal Processing for AI and Computer Vision. I'm passionate about applied science—where machine learning meets software & data engineering to solve real-world problems and create meaningful impact.</p>
                  <div className="contact-info">
                    <p><strong>Emails:</strong></p>
                    <ul className="email-list">
                      <li>zakaria.akil.2002@gmail.com</li>
                      <li>zakaria.akil@polytechnique.edu</li>
                      {/* <li>zakaria.akil@telecom-paris.fr</li> */}
                    </ul>
                  </div>
                  <div className="contact-info">
                    <p><strong>Locations:</strong></p>
                    <ul className="email-list">
                      <li>Luxembourg</li>
                      <li>Paris</li>
                    </ul>
                  </div>
                  <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <HyperBadge imageSrc={headerImg} alt="Zakaria Akil Profile" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
