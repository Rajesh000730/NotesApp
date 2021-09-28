import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";
import './nav.css'
import {useDispatch} from 'react-redux'
import { decrement, setemailtrue, setfalse, setpasswordtrue } from '../../../authslice'
const Nav = (props) => {

  const visible = props.visible 
  const [state,setstate] = useState("none")
  const dispatch = useDispatch()
  const handlesignout = ()=>{
  	window.sessionStorage.removeItem('jwt')
  	dispatch(decrement())

  }
  const handleclass = ()=>{
     state==="none"?setstate("user--details"):setstate("none")
  }	
 

  
  const handleemail = ()=>{
     dispatch(setemailtrue())
  }
  const handlepassword = ()=>{
     dispatch(setpasswordtrue())
  }
  const handleback = ()=>{
  	 dispatch(setfalse())
  }

  return (
    <div id="navbar" className="nav__container" >
	    <button style={{visibility:visible}} onClick={handleback}>Back</button>
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