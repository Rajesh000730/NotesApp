import React, {useEffect, useState} from 'react';

import {
  Link
} from "react-router-dom";
import './nav.css'
import {useDispatch} from 'react-redux'
import { decrement, setemailtrue, setfalse, setpasswordtrue } from '../../../authslice'
const Nav = (props) => {
  
  

  const visible = props.visible 
  const [state,setstate] = useState("none")
  const [state2,setstate2] = useState("none")

  const dispatch = useDispatch()
  const handlesignout = ()=>{
  	window.sessionStorage.removeItem('jwt')
  	dispatch(decrement());
  	dispatch(setfalse());

  }
  const handleclass = ()=>{
     state==="none"?setstate("user--details"):setstate("none")
  }	

  const handleclass2 = ()=>{
     state2==="none"?setstate2("listitems"):setstate2("none")
  } 
 

  
  const handleemail = ()=>{
     dispatch(setemailtrue())
     setstate("none")
  }
  const handlepassword = ()=>{
     dispatch(setpasswordtrue())
     setstate("none")
  }
  const handleback = ()=>{
  	 dispatch(setfalse())
     setstate("none")
  }

  return (
    <div id="navbar" className="nav__container" >
	    <button className="backbutton" style={{visibility:visible}} onClick={handleback}>Back</button>
      <div className="listicon">
         <h1 onClick={handleclass2}><i class="bi bi-list"></i></h1> 
         <div className={state2}>
            <p>Home</p>
            <p>Signout</p>
         
         </div>
      </div>
	    <div className="nav__elements--container">
	        <Link to="/"><button>Home</button></Link>
		    <button onClick={handlesignout}>Signout</button>
		    <div className="profile">
			    <div className="profile--photo" onClick={handleclass}>

			    </div>
			    <div id="user" className={state}>
	               <p>Signedin as: Rajesh</p>
	               <br/>
	               <p className="edit" onClick={handleemail}>Change Email</p>
	               <p className="edit" onClick={handlepassword}>Change Password</p>
	               <p className="edit">Change ProfilePhoto</p>
			    </div>
		    </div>
		    
	    </div>
    </div>
  )
}

export default Nav;