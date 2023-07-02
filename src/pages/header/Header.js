import React from "react";
import "./Header.css";
import { Typewriter} from "react-simple-typewriter";
// import LImg from "../../assests/me.png";
import LImg1 from "../../assests/me1.png";
import V1 from "../../assests/Vector1.png";
import V2 from "../../assests/Vector2.png";


const Header = () => {
  return (
    <>
      <section>
        <div className="container section__container">
          <div className="section__left">
            <span>Hy! I Am</span>
            <h3><span>Sikandar Kumar</span></h3>
            <span>I Am a <Typewriter
            words={['Programmer', 'Problem Solver', 'Web Designer', 'Full stack Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={500}
          />
            </span>
            <div className="btnn">
              <a href="contact" className="btn">
                Lets' Talk
              </a>
            </div>
          </div>
          <div className="section__right">
            <img src={V1} alt="" />
            <img src={V2} alt="" />
            <img src={LImg1} alt="noorper" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
