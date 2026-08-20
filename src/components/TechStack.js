import { Container } from "react-bootstrap";
import Reveal from "./Reveal";
import "../App.css";

// Languages
import pyImage from "../assets/img/py.png";
import cplusImage from "../assets/img/c++.png";
import jImage from "../assets/img/java.png";
import rImage from "../assets/img/R.svg.png";
import sql from "../assets/img/postgre.svg";
import cImage from "../assets/img/c.png";
import arduino from "../assets/img/Arduino.png";
import sv from "../assets/img/SystemVerilog_logo.png";
import htmlImage from "../assets/img/html.svg";
import cssImage from "../assets/img/css.svg";
import reactImage from "../assets/img/react.png";
import soliImage from "../assets/img/solidity.png";

// Tools & platforms
import git from "../assets/img/git.png";
import sage from "../assets/img/sage.png";
import glue from "../assets/img/glue.png";
import cdk from "../assets/img/cdk.png";
import s3 from "../assets/img/s3.png";
import lambda from "../assets/img/lambda.png";
import airflow from "../assets/img/airflow.png";
import redshift from "../assets/img/redshift.png";
import quicksight from "../assets/img/quicksight.png";
import simulink from "../assets/img/sim.png";
import unix from "../assets/img/ubunto.png";
import excel from "../assets/img/x.png";
import ap from "../assets/img/ap.png";

const languages = [
  { name: "Python", image: pyImage },
  { name: "SQL / PostgreSQL", image: sql },
  { name: "C++", image: cplusImage },
  { name: "C", image: cImage },
  { name: "Java", image: jImage },
  { name: "R", image: rImage },
  { name: "React", image: reactImage },
  { name: "HTML", image: htmlImage },
  { name: "CSS", image: cssImage },
  { name: "Solidity", image: soliImage },
  { name: "SystemVerilog", image: sv },
  { name: "Arduino", image: arduino },
];

const tools = [
  { name: "AWS SageMaker", image: sage },
  { name: "AWS Glue", image: glue },
  { name: "AWS CDK", image: cdk },
  { name: "AWS S3", image: s3 },
  { name: "AWS Lambda", image: lambda },
  { name: "Redshift", image: redshift },
  { name: "Airflow", image: airflow },
  { name: "QuickSight", image: quicksight },
  { name: "Git", image: git },
  { name: "Unix", image: unix },
  { name: "Matlab / Simulink", image: simulink },
  { name: "Excel", image: excel },
  { name: "Adobe Premiere", image: ap },
];

const TechGrid = ({ items }) => (
  <div className="tech-grid">
    {items.map((item) => (
      <div className="tech-tile" key={item.name}>
        <img src={item.image} alt={item.name} loading="lazy" />
        <span>{item.name}</span>
      </div>
    ))}
  </div>
);

const TechStack = () => {
  return (
    <section className="techstack" id="skills">
      <Container>
        <div className="section-head">
          <span className="eyebrow">Toolbox</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-sub">
            The languages, frameworks, and cloud platforms I use to take ideas from research to production.
          </p>
        </div>

        <Reveal>
          <div className="techstack-group">
            <div className="techstack-group-title">Languages</div>
            <TechGrid items={languages} />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="techstack-group">
            <div className="techstack-group-title">Tools &amp; Platforms</div>
            <TechGrid items={tools} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default TechStack;
