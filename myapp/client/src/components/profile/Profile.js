
import React from 'react'
import {useDispatch} from 'react-redux'
import {  increment } from '../../authslice'
import axios from 'axios'
import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Profilecomp from './Profilecomp'
function Profile(props) {
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

    return(
        <div>
            {props.auth?<Profilecomp/>:<h1>hello</h1>}
        </div>
        
    )
    
    
}

export default Profile