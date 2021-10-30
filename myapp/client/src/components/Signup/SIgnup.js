import axios from 'axios';
import React from 'react';
import {useState} from 'react'
import { Redirect } from 'react-router';
import './signup.css'
const SIgnup = (props) => {
  const [state, setState] = useState(false)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")

  const handleemail = (e)=>{
      setemail(e.target.value)
     
  }
  const handleusername = (e)=>{
    setusername(e.target.value)
}
  const handlepassword = (e)=>{
  
    setpassword(e.target.value)

} 
  const handlesubmit = ()=>{
    axios.post("http://localhost:5000/signup", {email:email, password:password, username:username})
    .then((data)=>{console.log('success'); setState(true)})
    .catch((err)=>{console.log('err')})
  }
 

  if(state){
    return (<div><Redirect to="/signin" /></div>)
  }
  return(
    <div className="signup">
      <div className="signup__formcont">
        <div className="signup__forminnercont">
          <input type="email" placeholder="Email" onChange={handleemail}/>
          <input type="text" placeholder="Username" onChange={handleusername}/>
          <input type="password" placeholder="Password" onChange={handlepassword}/>
          <button type="submit" onClick={handlesubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SIgnup;