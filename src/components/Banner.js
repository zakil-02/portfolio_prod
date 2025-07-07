import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pdp.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Engineering student !"]; 

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
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
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Zakaria</h1>
                  <p>I am currently pursuing a master M2 Data Science (M2DS) at Ecole Polytechnique in parallel with the last year of my Master in Engineering at Telecom Paris. At Telecom Paris, I am pursuing a double major in Signal Processing for AI and Computer Vision. With a deep passion for statistics, machine learning, and computer science, I am dedicated to leveraging these disciplines to drive innovation and solve complex problems.</p>
                  <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="profile-image-container">
                    <img src={headerImg} alt="Header Img" className="profile-image"/>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
