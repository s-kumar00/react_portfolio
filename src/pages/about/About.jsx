import React from 'react'
import './About.css'
import ME from '../../assests/pik.jpg'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Skill from '../skills/Skill'
import Education from '../education/Education';
import Service from '../service/Service'

const About = () => {
  return (
    <section id='about'>
      <h1 className='about_me'>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
        </div>

        <div className="about__content">
          <h5 className='heading'>Personal <span>Info</span></h5>
          <h4 className='head'>Name : <span>Sikandar Kumar</span></h4>
          <h4 className='head'>Age : <span>23</span></h4>
          <h4 className='head'>Email : <span>sikandarsahilkumar@gmail.com</span></h4>
          <h4 className='head'>Phone Number : <span>6206573315</span></h4>
          <h4 className='head'>Home Town : <span>Ghar Nokha (Bihar)</span></h4>
          <div className="about__cards">
            <article className='about__card'>
              <LocalLibraryIcon className='about__icon'/>
              <h4>Education</h4>
              <a href='#education' className='btn btn-primary'>Know More</a>
            </article>

            <article className='about__card'>
              <PsychologyIcon className='about__icon'/>
              <h4>Skills</h4>
              <a href="#skills" className='btn btn-primary'>Know More</a>
            </article>

            <article className='about__card'>
              <MiscellaneousServicesIcon className='about__icon'/>
              <h4>Services</h4>
              <a href='#service' className='btn btn-primary'>Know More</a>
            </article>

            <article className='about__card'>
              <FolderCopyIcon className='about__icon'/>
              <h4>Project</h4>
              <a href='portfolio' className='btn btn-primary'>Know More</a>
            </article>
          </div>
        </div>
      </div>
      <Education id="education" />
      <Skill id="skills" />
      <Service id="service" />
    </section>
  )
}

export default About
