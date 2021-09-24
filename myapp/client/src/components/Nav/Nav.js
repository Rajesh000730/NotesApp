import React from 'react'
import './Nav.css'
import {
    Link
  } from "react-router-dom";
function Nav(props) {
    const user = props.user
    return (
        <div className="main__container--nav">
            <div className="nav__elements--container">
            {user=='true'?<Link to="/signin"><a >Sign In</a></Link>:<h1></h1>}
            {user=='true'? <Link to="/signup"><a >Sign Up</a></Link>:<h1></h1>}
            <a >Learn More</a>
            </div>
        </div>
    )
}

export default Nav
