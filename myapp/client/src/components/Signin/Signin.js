import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import './Signin.css'
import {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {  increment, setuserprofile } from '../../authslice'
import axios from 'axios'

function Signin(props) {
    const user = useSelector((state)=> state.authslicered.userprofile) 
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [auth, setauth] = useState(false)
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
        if(data.error === "true") return
        window.sessionStorage.setItem('jwt', data.token)
        // console.log(data)
        dispatch(increment())
        
        
        
    }
    const handlesignin=()=>{

         axios.post('http://localhost:5000/signin', {email:email,password:password})
        .then(res=>res.data)
        .then(data=>{handlestorage(data); dispatch(setuserprofile(data))})   
        .catch(err=>console.log(err));
        console.log(user)
        
        
       
        
    }
    if(props.auth){
        return <Redirect to='/profile'/>
    }

    

    
        return (
            <div className="signin__container">
                <div className="form__container">
                    <div className="form__elements">
                        <input type='text' placeholder="email" onChange={handleemail}/>
                        <input type='password' placeholder="password" onChange={handlepassword}/>
                        <button onClick={handlesignin}>Signin</button>
                    </div>
                </div>
            </div>
        )
    
    
}

export default Signin
