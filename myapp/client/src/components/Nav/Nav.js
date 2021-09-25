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
            {user==='true'?<Link to="/signin"><button >Sign In</button></Link>:<h1>no</h1>}
            {user==='true'? <Link to="/signup"><button >Sign Up</button></Link>:<h1>no</h1>}
            <button >Learn More</button>
            </div>
        </div>
    )
}

export default Nav
