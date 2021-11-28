import React from 'react';
import resume from '../assets/images/Resume.pdf'
import '../componets/styles/resume.css'

export default function Resume() {
  return (
    <div className= "resume1">
      {/* <h1>Mary Lou Hoover Resume </h1> */}
      
      <a href = {resume} target = "_blank">My Resume</a>
     
    </div>
  );
}
