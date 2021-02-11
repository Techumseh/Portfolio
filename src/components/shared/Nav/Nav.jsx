import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">jeffrey bond</NavLink>
                <div className="links">
                   <NavLink className="link" to="/about">About Me</NavLink>
                   <NavLink className="link" to="/portfolio">Portfolio</NavLink>
                   <NavLink className="link" to="/resume">Resume</NavLink>
                   <NavLink className="link" to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav