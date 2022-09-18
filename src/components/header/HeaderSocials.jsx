import React from 'react'
import {BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://t.me/ordoru12' about='_blank'><BsTelegram /></a>
      <a href='https://github.com'><BsGithub /></a>
      <a href='https://dribble.com'><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials
