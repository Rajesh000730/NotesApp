import React from 'react'
import Maincont from '../Maincontent/Maincont'
import Nav from '../Nav/Nav'
import './Home.css'



function Home(props) {
    
   
     
    return (
        <div className="main__container">  
            <Nav user={'true'}/>
            <Maincont/>
        </div>
    )
}

export default Home
