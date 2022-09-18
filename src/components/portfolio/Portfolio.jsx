import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG6,
    title:"This PortFolio Web-App with ReactJs",
    github:"https://github.com/",
    demo:"localhost:3000"
  },
  {
    id:2,
    image:IMG1,
    title:"Simple Counter Website with ReactJs",
    github:"https://github.com/Dostonbekk7777/Counter",
    demo:"https://delicate-fairy-13ffad.netlify.app/"
  },
  {
    id:3,
    image:IMG2,
    title:"Modal Web-App with ReactJs",
    github:"https://github.com/Dostonbekk7777/Modal",
    demo:"https://dapper-mochi-8834f4.netlify.app/"
  },
  {
    id:4,
    image:IMG3,
    title:"Quiz Web-App with ReactJs",
    github:"https://github.com/Dostonbekk7777/Quiz",
    demo:"https://gleaming-cactus-7a757c.netlify.app/"
  },
  {
    id:5,
    image:IMG4,
    title:"Users Web-App with ReactJs",
    github:"https://github.com/Dostonbekk7777/Users",
    demo:"https://sunny-sorbet-15361d.netlify.app/"
  },
  {
    id:6,
    image:IMG5,
    title:"Beautiful The Weather App with ReactJs",
    github:"https://github.com/Dostonbekk7777/Weather",
    demo:"https://beautiful-moxie-23078e.netlify.app/"
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
    {data.map((data)=>{
      return (
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={data.image} alt="" />
          </div>
          <h3>{data.title}</h3>
          <div className="portfolio__item-cta">
            <a target="_blank" href={data.github} className='btn'>GitHub</a>
            <a target="_blank" href={data.demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      )
    })}
    </div>
    </section>
  )
}

export default Portfolio