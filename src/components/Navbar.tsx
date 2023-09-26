import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav id='navbar'>
            <h2>
                <Link to='/'>
                   <BiCameraMovie /> SearchFilms
                </Link>
            </h2>
      </nav>
    </div>
  )
}

export default Navbar