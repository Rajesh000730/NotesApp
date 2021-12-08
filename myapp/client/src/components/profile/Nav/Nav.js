import React, {useEffect, useState} from 'react';

import {
  Link
} from "react-router-dom";
import './nav.css'
import {useDispatch} from 'react-redux'
import { decrement } from '../../../authslice'
const Nav = (props) => {
  
  

  
  const [state,setstate] = useState("none")
  const [state2,setstate2] = useState("none")
  
  window.onscroll = ()=>{
     setstate2("none")
}
  const dispatch = useDispatch()
  const handlesignout = ()=>{
  	window.sessionStorage.removeItem('jwt')
  	dispatch(decrement());
  	

  }
  const handleclass = ()=>{
     state==="none"?setstate("user--details"):setstate("none")
  }	

  const handleclass2 = ()=>{
     state2==="none"?setstate2("listitems"):setstate2("none")
  } 

  


  return (
    <div id="navbar" className="nav__container" >
	    
      <div className="listicon">
         <h1 onClick={handleclass2} className="text-3xl cursor-pointer"><i class="bi bi-list"></i></h1> 
         <div className={state2}>
            <Link to="/" style={{textDecoration:"none"}}><p className="font-bold">Home</p></Link>
            <Link to="/editprofile"><p className="font-bold">Edit Profile</p></Link>
            <p className="font-bold" onClick={handlesignout}>Signout</p>
         
         </div>
      </div>
	    <div className="nav__elements---container">
	        
		    
		    <div className="profile">
			    <div className="profile--photo" onClick={handleclass}>

			    </div>
			   
		    </div>
		    
	    </div>
    </div>
  )
}

export default Nav;