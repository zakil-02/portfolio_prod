import React from 'react';
import 'animate.css';
//import TrackVisibility from 'react-on-screen';

//import './ProgrammingLanguages.css'; // Make sure this points to your CSS file
import ap from '../assets/img/ap.png';
import ai from '../assets/img/ai.png';
import unix from '../assets/img/ubunto.png';
import simulink from '../assets/img/sim.png';
import scilab from '../assets/img/sci.png';
import gimp from '../assets/img/gimp.png';
import excel from '../assets/img/x.png';
import git from '../assets/img/git.png';
const skills = [
  { name: 'Git', image: git },
  { name: 'Excel', image: excel },
  { name: 'Adobe Premier', image: ap },
  { name: 'Adobe Illustrator', image: ai },
  { name: 'Unix', image: unix },
  { name: 'Simulink/Matlab', image: simulink },
  { name: 'Scilab', image: scilab },
  { name: 'Gimp', image: gimp },  
];

const Softwares = () => {
  return (
    <div className="language-container">
      <div className="title-container"> {/* Added container for title */}
        <h2 className="title">Software tools</h2>
      </div>
      <div className='items-container'>
        {skills.map((skill, index) => (
          <div className="language-item" key={index}>
            <img
              className="language-image"
              src={skill.image}
              alt={skill.name}
            />
            <p className="language-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Softwares;

