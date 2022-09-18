import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {BsFolderSymlinkFill} from "react-icons/bs"
 
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me"/>          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Exprience</h5>
              <small>4+ Month Studying</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1 Worldwide</small>
            </article>
            <article className='about__card'>
              <BsFolderSymlinkFill className='about__icon'/>
              <h5>Projects</h5>
              <small>3  Completed</small>
            </article>
          </div>
          <p> I am 22 years old and live in Uzbekistan. I am currently working as a front-end developer on ReactJs and mobile app front-end on flutter framework. In the future, I want to improve my knowledge and learn back-end technologies (ASP.NET, node.Js) by joining a great team.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
