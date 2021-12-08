import axios from 'axios';
import React from 'react';
import {useState} from 'react'
import { Redirect } from 'react-router';
import './signup.css'
import validator from 'validator'
import passwordValidator from 'password-validator'
var schema = new passwordValidator();
schema.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']);
const SIgnup = (props) => {
  const [state, setState] = useState(false)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")
  const [emailerror, setemailerror] = useState(false)
  const [passworderror, setpassworderror] = useState(false)
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
   
    if(validator.isEmail(email) && schema.validate(password)){
    axios.post("http://localhost:5000/signup", {email:email, password:password, username:username})
    .then((data)=>{
      if(data.data=="exists"){
        window.alert("user  already exists")
      }
      else{
        setState(true)
      }
      console.log(data.data)
    })
    .catch((err)=>{console.log('err')})
  }
  else{
    if(!validator.isEmail(email)){
      setemailerror(true)
    }
    if(!schema.validate(password)){
      setpassworderror(true)
    }
  }
  }
 

  if(state){
    return (<div><Redirect to="/signin" /></div>)
  }
  return(
    <div className="signup">
      <div className="signup__formcont">
        <div className="signup__forminnercont">
        {emailerror?<h3 style={{color:"red",position:"relative",left:"0"}}>enter valid email!!!</h3>:<h3 style={{color:"white"}}>Enter email</h3>} 
          <input type="email" placeholder="Email" onChange={handleemail}/>
          <h3 style={{color:"white"}}>enter username</h3>
          <input type="text" placeholder="Username" onChange={handleusername}/>
          {passworderror?<h3 style={{color:"red",position:"relative",left:"0"}}>enter valid password!!!</h3>:<h3 style={{color:"white"}}>enter password</h3>}
          <input type="password" placeholder="Password" onChange={handlepassword}/>
          

          <button type="submit" onClick={handlesubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SIgnup;