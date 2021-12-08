import React, { useState } from 'react'
import './Nav.css'
import {
    Link
  } from "react-router-dom";

  
function Nav(props) {
    const user = props.user

    const [state2,setstate2] = useState("none")
   
     const handleclass2 = ()=>{
        state2==="none"?setstate2("listitems"):setstate2("none")
     } 
   

    return (
        <div className="main__container--nav">
             <div className="nav--list">
         <h1 onClick={handleclass2} className="list"><i class="bi bi-list"></i></h1> 
         <div className={state2}>
            <Link to="/signin" style={{textDecoration:"none"}}><p>SignIn</p></Link>
            
            <Link to="/signup"><p>SignUp</p></Link>
           
         
         </div>
      </div>
              
            <div className="nav__elements-container">
             
            {user==='true'?<Link to="/signin"><button className="font-bold">Sign In</button></Link>:<h1>no</h1>}
            {user==='true'? <Link to="/signup"><button className="font-bold">Sign Up</button></Link>:<h1>no</h1>}
            
            </div>
        </div>
    )
}

export default Nav
