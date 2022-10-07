import React, {useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import './Navbar.scss'


const Navbar = () => {


  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        {['clients','orders','messages','users','settings'].map((item)=> (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href='./'>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar