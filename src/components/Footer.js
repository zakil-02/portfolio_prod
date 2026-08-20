import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          <div className="footer-brand">
            <h1>Zakaria Akil</h1>
            <p className="footer-tagline">Data Scientist · ML / Data Engineer</p>
          </div>
          <div className="footer-right">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/zakaria-akil-79aa9a253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/zakil-02" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={navIcon2} alt="" /></a>
              <a href="https://leetcode.com/u/zakill/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><img src={navIcon3} alt="" /></a>
            </div>
            <p>© {new Date().getFullYear()} Zakaria Akil. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
