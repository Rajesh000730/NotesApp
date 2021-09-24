import React from 'react'
import Maincont from '../Maincontent/Maincont'
import Nav from '../Nav/Nav'
import './Home.css'
import { useState } from 'react'
import axios from 'axios'


const handlesignin = ()=>{
    
    axios.get('http://localhost:5000/signin')
    .then(res=>res.text())
    .then(res=>console.log('response'))
    .catch(err=>console.log('notok'))
}
function Home(props) {
    const [istrue, setistrue] = useState('true')
   
     
    return (
        <div className="main__container">  
            <Nav user={istrue}/>
            <Maincont/>
        </div>
    )
}

export default Home
