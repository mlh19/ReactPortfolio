import React from 'react';
import me from '../assets/images/Me.png'
import '../componets/styles/about.css'

export default function About() {
  return (
    <div>
      <section class="about">
    

      <div className="img-container">
        <img className="img1 center"  src={me} alt="img of myself" />
      </div>
      <div className="container"></div>
      
      <div id="intro">
        <article>
          <div class="intro">
            console.log("Hello World!!"); <br/>
          </div>
          <div>
            I am Mary Lou Hoover. <br/>
            Degree in Mathematics. <br/>
            Aspiring web developer.
          </div>
        </article>
      </div>
    </section>



     
    </div>
  );
}
