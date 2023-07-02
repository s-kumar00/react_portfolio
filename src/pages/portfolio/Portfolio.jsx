import React from 'react'
import './Portfolio.css'
import ME_1 from '../../assests/project1.png';
import ME_2 from '../../assests/project2.png';
import ME_4 from '../../assests/project4.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="heading">My <span>Projects</span></h1>
      <div className="container portfolio__container">
        <article className='portfolio__items'>
          <h2>1. PortFolio <span>Website</span></h2>
          <div className='portfolio__imgg'>
            <img src={ME_1} alt="noreferrer" />
          </div>
          <p>-----------------------------------------------------------------------------</p>
          <h3>This is my another portfolio. 
            <br /><span>TECH : </span>HTLM, CSS, JAVASCRIPT:
          </h3>
          <p>-----------------------------------------------------------------------------</p>
          <div className="port_icon">
            <a href='https://github.com/s-kumar00/PortFolio' className='btn1' target='_blank' rel="noreferrer"><GitHubIcon /></a>
            <a href='https://s-kumar00.github.io/PortFolio/#portfolio' className='btn2' target='_blank' rel="noreferrer"><LanguageIcon /></a>
          </div>
        </article>
        <article className='portfolio__items'>
          <h2>2. Gym <span>Website</span></h2>
          <div className='portfolio__imgg'>
            <img src={ME_2} alt="noreferrer" />
          </div>
          <p>-----------------------------------------------------------------------------</p>
          <h3>this is Gym Fitness Club live Project. 
            <br /><span>TECH : </span>HTML , CSS, JS, HBS, NODEJS ,MONGODB
          </h3>
          <p>-----------------------------------------------------------------------------</p>
          <div className="port_icon">
            <a href='https://github.com/s-kumar00/gym' className='btn1' target='_blank' rel="noreferrer"><GitHubIcon /></a>
            <a href='https://s-kumar00.github.io/gym/' className='btn2' target='_blank' rel="noreferrer"><LanguageIcon /></a>
          </div>
        </article>
        <article className='portfolio__items'>
          <h2>3. Weather API <span>Website</span></h2>
          <div className='portfolio__imgg'>
            <img src={ME_1} alt="noreferrer" />
          </div>
          <p>-----------------------------------------------------------------------------</p>
          <h3>this is a Weather Api project where you can fetch wheather after inter city name.
          <br /><span>TECH : </span>HTML , CSS.
          </h3>
          <p>-----------------------------------------------------------------------------</p>
          <div className="port_icon">
            <a href='https://github.com' className='btn1' target='_blank' rel="noreferrer"><GitHubIcon /></a>
            <a href='https://github.com' className='btn2' target='_blank' rel="noreferrer"><LanguageIcon /></a>
          </div>
        </article>
        <article className='portfolio__items'>
          <h2>4. Calculator <span>Website</span></h2>
          <div className='portfolio__imgg'>
            <img src={ME_4} alt="noreferrer" />
          </div>
          <p>-----------------------------------------------------------------------------</p>
          <h3>this is a Basic Calculator. 
          <br /><span>TECH : </span>HTML , CSS.
          </h3>
          <p>-----------------------------------------------------------------------------</p>
          <div className="port_icon">
            <a href='https://github.com/s-kumar00/Calculator' className='btn1' target='_blank' rel="noreferrer"><GitHubIcon /></a>
            <a href='https://s-kumar00.github.io/Calculator/' className='btn2'target='_blank' rel="noreferrer"><LanguageIcon /></a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
