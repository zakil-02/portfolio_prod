import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/art_pixel_pdp.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { FiMapPin } from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HyperBadge from './HyperBadge';

const STATS = [
  { value: "16+", label: "Projects" },
  { value: "4", label: "Roles & internships" },
  { value: "2", label: "Master's programs" },
];

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-aurora" aria-hidden="true"></div>
      <div className="banner-grid" aria-hidden="true"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`banner-content ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                  <span className="eyebrow">Data Scientist · ML / Data Engineer</span>
                  <h1 className="banner-title">
                    Turning complex data into <span className="text-gradient">real-world impact</span>.
                  </h1>
                  <p className="banner-lead">
                    I'm Zakaria — an MSc Data Science candidate at École Polytechnique (M2DS)
                    and MEng at Télécom Paris. I build production ML systems, data pipelines,
                    and quantitative research where machine learning meets software &amp; data engineering.
                  </p>

                  <div className="banner-meta">
                    <span className="banner-chip"><FiMapPin aria-hidden="true" /> Luxembourg · Paris</span>
                    <span className="banner-chip banner-chip--available">
                      <span className="pulse-dot" aria-hidden="true"></span> Open to opportunities
                    </span>
                  </div>

                  <div className="banner-cta">
                    <HashLink smooth to="#projects" className="btn-x btn-x--primary">
                      View Projects <ArrowRightCircle size={20} />
                    </HashLink>
                    <HashLink smooth to="#connect" className="btn-x btn-x--ghost">
                      Get in touch
                    </HashLink>
                  </div>

                  <div className="banner-stats">
                    {STATS.map((stat) => (
                      <div className="banner-stat" key={stat.label}>
                        <span className="banner-stat-value">{stat.value}</span>
                        <span className="banner-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn animate__delay-1s" : ""}>
                  <HyperBadge imageSrc={headerImg} alt="Zakaria Akil" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
