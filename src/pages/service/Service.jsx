import React from "react";
import "./Service.css";
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import FolderCopyIcon from "@mui/icons-material/FolderCopy";

const Service = (props) => {
  return (
    <section id={props.id} className="service">
      <h5 className="service__me">What I Offer</h5>
      <h1 className="heading">S<span>ervices</span></h1>
      <div className="container service__container">
        <article className="service__art">
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>
          <p>I can Solve Various Coding problems. </p>
        </article>
        <article className="service__art">
          <div className="service__head">
            <h3><CodeIcon />Coding</h3>
          </div>
          <p>I can do clean code. </p>
          <div className="btn__btn">
            <a href="https://leetcode.com/sikandarsahilkumar/" target="__blank" className="btn btn-primary">leetcode</a>
            <a href="https://auth.geeksforgeeks.org/user/sikandarsahilkumar/practice" target="__blank" className="btn btn-primary">Gfg</a>
            <a href="https://www.hackerrank.com/sikandarsahilku1?hr_r=1" target="__blank" className="btn btn-primary">HakerRank</a>
          </div>
        </article>
        <article className="service__art">
          <div className="service__head">
            <h3><DesignServicesIcon />Web Design</h3>
          </div>
          <p>I can Design Websites in Very Creative and Innovative Ways. </p>
        </article>
        <article className="service__art">
          <div className="service__head">
            <h3><SearchIcon />Finder</h3>
          </div>
          <p>I can Solve Various Coding problems. </p>
        </article>
        <article className="service__art">
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>
          <p>Can Find Any Problem Solution. </p>
        </article>
        <article className="service__art">
          <div className="service__head">
            <h3><RecordVoiceOverIcon />Communication</h3>
          </div>
          <p>Am good in Communication. </p>
        </article>
      </div>
    </section>
  );
};

export default Service;
