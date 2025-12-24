import 'animate.css';
//import TrackVisibility from 'react-on-screen';

//import './ProgrammingLanguages.css'; // Make sure this points to your CSS file
import ap from '../assets/img/ap.png';
// import ai from '../assets/img/ai.png';
import unix from '../assets/img/ubunto.png';
import simulink from '../assets/img/sim.png';
import excel from '../assets/img/x.png';
import git from '../assets/img/git.png';
import lambda from '../assets/img/lambda.png';
import cdk from '../assets/img/cdk.png';
import s3 from '../assets/img/s3.png';
import glue from '../assets/img/glue.png';
import sage from '../assets/img/sage.png';
import airflow from '../assets/img/airflow.png';
import redshift from '../assets/img/redshift.png';
import quicksight from '../assets/img/quicksight.png';

const skills = [
  { name: 'Git', image: git },
  { name: 'AWS SageMaker', image: sage },
  { name: 'AWS Glue', image: glue },
  { name: 'AWS CDK', image: cdk },
  { name: 'AWS S3', image: s3 },
  { name: 'AWS Lambda', image: lambda },
  { name: 'Airflow', image: airflow },
  { name: 'Redshift', image: redshift },
  { name: 'Quicksight', image: quicksight },
  { name: 'Simulink/Matlab', image: simulink },
  { name: 'Unix', image: unix },
  { name: 'Excel', image: excel },
  { name: 'Adobe Premier', image: ap },
  // { name: 'Adobe Illustrator', image: ai },
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

