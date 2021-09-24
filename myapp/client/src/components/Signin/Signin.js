import React from 'react'
import { Redirect } from 'react-router-dom'
import './Signin.css'
import {useState} from 'react'
import axios from 'axios'
function Signin() {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [datar, setdatar] = useState()
    const [state, setstate] = useState('true')
    const [dataname,setdataname] = useState('')
    const handlename = (e)=>{
        setname(e.target.value)
    }
    const handleage=(e)=>{
        setage(e.target.value)
        console.log(age)
    }
    const handlesignin=()=>{

         axios.post('http://localhost:5000/signin', {name:name,age:age})
        .then(res=>res.data)
        .then(data=>setstate(data.error))   
        .catch(err=>console.log(err));
        
        
        
    }
    if(state==='false'){
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
