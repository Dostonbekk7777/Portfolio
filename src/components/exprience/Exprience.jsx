import React from 'react'
import "./exprience.css"
import {BsCloudCheckFill} from "react-icons/bs"
import  BC from "../../assets/backend.png"

const Exprience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container exp__container'>
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className='exp__details'>
              <BsCloudCheckFill className="exp__details-icon"/>
              <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
               </article>
            <article className='exp__details'>
              <BsCloudCheckFill className="exp__details-icon"/>
              <div><h4>CSS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='exp__details'>
              <BsCloudCheckFill className="exp__details-icon"/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='exp__details'>
              <BsCloudCheckFill className="exp__details-icon"/>
              <div><h4>BootStrap</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
            <article className='exp__details'>
              <BsCloudCheckFill className="exp__details-icon"/>
             <div> <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='exp__details'>
              <BsCloudCheckFill className="exp__details-icon"/>
              <div><h4>Flutter</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
          </div>
        </div>

       { /* end of front end */}
        <div className="exp__backend"><h3>Backend Development</h3>
        <div className='exp__img'>
          <img src={BC} alt="" />
        </div>
          </div>
      </div>
    </section>
  )
}

export default Exprience