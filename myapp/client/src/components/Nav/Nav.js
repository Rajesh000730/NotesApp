import React, { useState } from 'react'
import './Nav.css'
import {
    Link
  } from "react-router-dom";

// console.log(screen.width)  
function Nav(props) {
    const [width, setwidth] = useState(window.innerWidth)
    
    const user = props.user
    window.addEventListener("resize", ()=>{
        setwidth(window.innerWidth);
        
    })
    const [state2,setstate2] = useState("none")
   
     const handleclass2 = ()=>{
        state2==="none"?setstate2("listitems"):setstate2("none")
     } 
   

    return (
        <div>
         {width>604?<Navforlarge/>:<Navforsmall/>}
          
        </div>
    )
}

export default Nav



const Navforlarge = ()=>{
 return(<div className="flex items-center justify-end w-screen h-16 bg-black"><div className="nav__elements-container">
             
            {<Link to="/signin"><button className="font-bold">Sign In</button></Link>}
            { <Link to="/signup"><button className="font-bold">Sign Up</button></Link>}
            
            </div>
            </div> )
}


const Navforsmall = ()=>{
    const handlelist = ()=>{
        istrue?setistrue(false):setistrue(true)
    }

    const [istrue, setistrue] = useState(false);

    return(<div className="flex items-center justify-start w-screen h-16 bg-black">
           <div className="" onClick={handlelist}>
             
            <h1 className="text-white text-4xl ml-4"><i class="bi bi-list"></i></h1>
            
            </div>
            {istrue?<Sidebar/>:<h1></h1>}
            </div> )
}


const Sidebar = ()=>{
    return(
       <div className="p-4 absolute top-16 w-80 h-xl bg-black z-10">
          <Link to="/signin"><p className="text-white text-xl p-2 font-bold border-b-2 border-white">Sign in</p></Link>
          <Link to="/signup"><p className="text-white text-xl p-2 font-bold border-b-2 border-white">Sign up</p></Link>

       </div>
    )
}