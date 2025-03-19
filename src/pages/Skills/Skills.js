
import React from "react";
import Container from "../../Components/Container/Container";
import "./Skills.css";
import { DiCss3, DiBootstrap, DiReact, DiAngularSimple, DiHtml5, DiJava, DiGit } from "react-icons/di";
import { SiJavascript,SiSpringboot, SiMysql, SiOracle } from "react-icons/si";
// import { CgFigma } from "react-icons/cg";
import { FaServer } from "react-icons/fa"; // Using FaServer for RESTful API

function Skills() {
  return (
    <div className="skills-outer">
      <div className="skills" id="skills">
        <Container className="skills-cont">
          <div className="skills-content-wrapper">
            <div className="skills-header">
              <h1>Skills</h1>
            </div>
            <div className="skills-list-wrapper">
              <div className="skills-card" data-aos="slide-down">
                <DiHtml5 className="skills-icon html" />
                <div className="skill-title">Html</div>
              </div>
              <div className="skills-card" data-aos="fade-up">
                <DiCss3 className="skills-icon css" />
                <div className="skill-title">Css</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <SiJavascript className="skills-icon js" />
                <div className="skill-title">Javascript</div>
              </div>
              <div className="skills-card" data-aos="slide-down">
                <DiBootstrap className="skills-icon bootstrap" />
                <div className="skill-title">Bootstrap</div>
              </div>
              <div className="skills-card" data-aos="slide-down">
                <DiReact className="skills-icon react" />
                <div className="skill-title">React</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <DiAngularSimple className="skills-icon angularsimple" />
                <div className="skill-title">Angular</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <DiJava className="skills-icon java" />
                <div className="skill-title">Java</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <SiSpringboot className="skills-icon springboot" />
                <div className="skill-title">Spring Boot</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <SiMysql className="skills-icon mysql" />
                <div className="skill-title">MySQL</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <SiOracle className="skills-icon oracle" />
                <div className="skill-title">Oracle</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <FaServer className="skills-icon restfulapi" />
                <div className="skill-title">RESTful API</div>
              </div>
              <div className="skills-card" data-aos="slide-up">
                <DiGit className="skills-icon git" />
                <div className="skill-title">Git</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Skills;



