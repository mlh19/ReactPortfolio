import React from 'react';
import Github from '../assets/images/logo/github.png'
import Linkedin from '../assets/images/logo/linkedin.png'
import Twitter from '../assets/images/logo/twitter.png'
import Phone from '../assets/images/logo/phone.png'
import '../componets/styles/footer.css'

const Footer = () => {
    return (<div>
         <footer>
           <span>
        <div>
      <ul className= 'icons'>
        <li className='fred'>
          <figure class="icon">
            <a href="https://github.com/mlh19">
              <img src={Github} alt="GitHub Icon"/></a>
          </figure>
        </li>
        <li>
          <figure class="icon">
            <a href="https://www.linkedin.com/in/ml-hoover/">
              <img src={Linkedin} alt="LinkedIn  Icon"/></a>
          </figure>
        </li>
        <li>
          <figure class="icon">
            <a href="https://twitter.com/ml_hoover">
              <img src={Twitter} alt="Twitter Icon"/></a>
          </figure>
        </li>
        <li>
          <figure class="icon">
            <a href="tel:+830-998-6717">
              <img src={Phone} alt="Phone Icon"/></a>
          </figure>
        </li>
      </ul>
    </div>
    </span>
        </footer> 
                
    </div>)
}

export default Footer