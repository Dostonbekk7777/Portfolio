import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DOSTON ORZIEV</a>

      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#exprience">EXPERIENCE</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Doston Orziev. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer