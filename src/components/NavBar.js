import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const SECTIONS = ['home', 'education', 'experience', 'projects', 'skills', 'interests'];

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
];

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    const nodes = SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" aria-label="Zakaria Akil — home">
            <span className="brand-mark">ZA</span>
            <span className="brand-name">Zakaria Akil</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.id}
                  href={`#${link.id}`}
                  className={activeLink === link.id ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/zakaria-akil-79aa9a253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/zakil-02" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={navIcon2} alt="" /></a>
                <a href="https://leetcode.com/u/zakill/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><img src={navIcon3} alt="" /></a>
              </div>
              <a href="#connect" onClick={() => setActiveLink('connect')}>
                <button className="vvd"><span>Let’s Connect</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
