
import React from 'react';
//import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//import { ProjectCard } from "./ProjectCard";
import 'animate.css';
//import TrackVisibility from 'react-on-screen';

//import './ProgrammingLanguages.css'; // Make sure this points to your CSS file
import reactImage from '../assets/img/react.png';
import jImage from '../assets/img/java.png';
// import jsImage from '../assets/img/js.png';
import cImage from '../assets/img/c.png';
import cplusImage from '../assets/img/c++.png';
import cssImage from '../assets/img/css.svg';
import htmlImage from '../assets/img/html.svg';
import soliImage from '../assets/img/solidity.png';
import rImage from '../assets/img/R.svg.png';
import pyImage from '../assets/img/py.png';
// import matlabImage from '../assets/img/Matlab.png'
import sql from '../assets/img/postgre.svg'
import sv from '../assets/img/SystemVerilog_logo.png'
import arduino from '../assets/img/Arduino.png'

const languages = [
  { name: 'Python', image: pyImage },
  { name: 'C++', image: cplusImage },
  { name: 'Java', image: jImage },
  { name: 'R language', image: rImage },
  { name: 'PostgreSQL', image: sql },
  { name: 'C', image: cImage },
  { name: 'Arduino', image: arduino },
  { name: 'SystemVerilog', image: sv },
  { name: 'html', image: htmlImage },
  { name: 'css', image: cssImage },
  { name: 'React', image: reactImage },
  { name: 'Solidity', image: soliImage },
  
  
];

const ProgrammingLanguages = () => {
  return (
    <div className="language-container">
      <div className="title-container"> {/* Added container for title */}
        <h2 className="title">Programming Languages</h2>
      </div>
      <div className="items-container">
        {languages.map((language, index) => (
          <div className="language-item" key={index}>
            <img
              className="language-image"
              src={language.image}
              alt={language.name}
            />
            <p className="language-name">{language.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;

