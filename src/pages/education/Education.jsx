import React from "react";
import "./Education.css";
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Education = (props) => {
  return (
    <section id={props.id} className="education">
      <h1 className="heading">My <span>Education</span></h1>
      <div className="container education__container">
        <div className="box">
          <SchoolIcon />
          <span> <CalendarMonthIcon /> 2021 - 2024</span>
          <h5>Master's In Computer Applications</h5>
          <p><PlaceIcon />National Institute of Technology , Warangal</p>
        </div>
        <div className="box">
          <SchoolIcon />
          <span><CalendarMonthIcon />2017 - 2020</span>
          <h3>Bachelor's In Computer Applications</h3>
          <p><PlaceIcon />S.P Jain college Sasaram ,Bihar</p>
        </div>
        <div className="box">
          <SchoolIcon />
          <span><CalendarMonthIcon />2015 - 2017</span>
          <h3>Higher Secondary School</h3>
          <p><PlaceIcon />SherShah college sasaram Bihar</p>
        </div>
        <div className="box">
          <SchoolIcon />
          <span><CalendarMonthIcon />2013 - 2015</span>
          <h3>High School</h3>
          <p><PlaceIcon />High School Ghar Nokha Bihar</p>
        </div>
      </div>
    </section>
  )
}

export default Education;
