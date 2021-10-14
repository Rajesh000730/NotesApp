import React from 'react'
import { Redirect } from 'react-router-dom'
import './Signin.css'
import {useState} from 'react'
import {  useDispatch } from 'react-redux'
import {  increment } from '../../authslice'
import axios from 'axios'
function Signin(props) {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [auth, setauth] = useState(false)
    const dispatch = useDispatch()
    if(!props.auth)
    {if(window.sessionStorage){
    
        axios.post('http://localhost:5000/auth',{token:window.sessionStorage.jwt})
        .then(res=>setauth(res.data))
        .catch(err=>console.log('err'))
       
    }
    }
    if(auth){
        dispatch(increment())
    }


    
     
    const handlename = (e)=>{
        setname(e.target.value)
    }
    const handleage=(e)=>{
        setage(e.target.value)
        console.log(age)
    }
    const handlestorage = (data)=>{
        if(data.error === "true") return
        window.sessionStorage.setItem('jwt', data.token)
        console.log(data)
        dispatch(increment())
        
    }
    const handlesignin=()=>{

         axios.post('http://localhost:5000/signin', {name:name,age:age})
        .then(res=>res.data)
        .then(data=>handlestorage(data))   
        .catch(err=>console.log(err));
        
        
       
        
    }
    if(props.auth){
        return <Redirect to='/profile'/>
    }

    

    
        return (
            <div className="signin__container">
                <div className="form__container">
                    <div className="form__elements">
                        <input type='text' placeholder="Name" onChange={handlename}/>
                        <input type='text' placeholder="Age" onChange={handleage}/>
                        <button onClick={handlesignin}>Signin</button>
                    </div>
                </div>
            </div>
        )
    
    
}

export default Signin
