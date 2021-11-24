import React from 'react';
import me from '../assets/Me.png'
export default function About() {
  return (
    <div>
      <section class="about">
      <h1>
        About Me
      </h1>

        <img src={me} alt="My picture"/>
      
      <div id="intro">
        <article>
          <div class="intro">
            Hello!
            I am Mary Lou Hoover. <br/>
          </div>
          <div>
            Degree in Mathematics. <br/>
            Aspiring web developer.
          </div>
        </article>
      </div>
    </section>



     
    </div>
  );
}
