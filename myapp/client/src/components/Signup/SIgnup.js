import React from 'react';
import {useState} from 'react'
import { Redirect } from 'react-router';
import './signup.css'
const SIgnup = (props) => {
  const [state, setState] = useState()
  if(state){
    return (<div><Redirect to="/" /></div>)
  }
  return(
    <div className="signup">
      <div className="signup__formcont">
        <div className="signup__forminnercont">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password"/>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SIgnup;