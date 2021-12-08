import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import './Signin.css'
import {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {  increment } from '../../authslice'
import axios from 'axios'

function Signin(props) {
   
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [auth, setauth] = useState(false)
    const [usererror, setusererror] = useState(false)
    const [passworderror, setpassworderror] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!props.auth)
    {if(window.sessionStorage){
    
        axios.post('http://localhost:5000/auth',{token:window.sessionStorage.jwt})
        .then(res=>setauth(res.data.false))
        .catch(err=>console.log('err'))
       
    }
    }
       
    }, [])
    if(auth){
        dispatch(increment())
    }


    
     
    const handleemail = (e)=>{
        setemail(e.target.value)
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value)
        
    }
    const handlestorage = (data)=>{
        if(data.error === "true") {
            setusererror(true)
            return
        }
        if(data.passworderror==true){
            setpassworderror(true)
            return
        }
        window.sessionStorage.setItem('jwt', data.token)
        // console.log(data)
        dispatch(increment())
        
        
        
    }
    const handlefocus = ()=>{
        setusererror(false);
        setpassworderror(false)
    }
    const handlesignin=()=>{

         axios.post('http://localhost:5000/signin', {email:email,password:password})
        .then(res=>res.data)
        .then(data=>{handlestorage(data); })   
        .catch(err=>console.log(err));
        // console.log(user)
        
        
       
        
    }
    if(props.auth){
        return <Redirect to='/profile'/>
    }

    

    
        return (
            <div className="signin__container">
                <div className="form__container">
                    <div className="form__elements">
                        {usererror?<h3 style={{color:"red"}}>This email is not registered!!!</h3>:<h3 className="text-white font-bold">Enter Email</h3>}
                        <input type='text' placeholder="email" onChange={handleemail} onFocus={handlefocus}/>
                        {passworderror?<h3 style={{color:"red"}}>Incorrect Password</h3>:<h3 className="text-white font-bold">Enter Password</h3>}
                        <input type='password' placeholder="password" onChange={handlepassword} onFocus={handlefocus}/>
                        <button className="font-bold relative left-32" onClick={handlesignin}>Signin</button>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    
    
}

export default Signin
