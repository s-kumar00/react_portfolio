import React from "react";
import "./Skill.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Skill = (props) => {
  return (
    <section id={props.id} className="skills">
      <h5 className="skills__me">What Skill I Have</h5>
      <h1 className="heading">
        My <span>Skills</span>
      </h1>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Language</h3>
          <div className="skill__content">
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>80%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>80%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>70%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>60%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>BackEnd Language</h3>
          <div className="skill__content">
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>60%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>40%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>70%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>40%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill__Programming">
          <h3>Programming Langauge</h3>
          <div className="skill__content">
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>80%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>60%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>C</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>40%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <CircularProgress
                value={60}
                thickness="5px"
                color="orange"
                className="skill_icon"
              >
                <CircularProgressLabel>
                  <p>30%</p>
                </CircularProgressLabel>
              </CircularProgress>
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill__others">
          <h3>Others Skills</h3>
          <div className="skill__content">
            <article className="skill__details">
            <VerifiedIcon className="skill_icon"></VerifiedIcon>
              <div>
                <h4>Problem_Solving</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skill__details">
              <VerifiedIcon className="skill_icon"></VerifiedIcon>
              <div>
                <h4>Leadership</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skill__details">
            <VerifiedIcon className="skill_icon"></VerifiedIcon>
              <div>
                <h4>TeamWork</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skill__details">
            <VerifiedIcon className="skill_icon"></VerifiedIcon>
              <div>
                <h4>Critical_Thinking</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skill__details">
            <VerifiedIcon className="skill_icon"></VerifiedIcon>
              <div>
                <h4>Communication</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skill__details">
            <VerifiedIcon className="skill_icon"></VerifiedIcon>
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
