import React, {useState}from 'react'
import './profilecomp.css'
import Nav from './Nav/Nav'
import Email from './ChangeEmail/ChangeEmail'
import ChangePassword from './changePassword/ChangePassword'
import UserProfile from './userProfile/UserProfile'  
import { useSelector } from 'react-redux';
function Profilecomp(props) {
    
    const [photo,setphoto] = useState(false);



    return (
        
        <div className="profilecont">
            <Nav  />
            <UserProfile user={props.user}/>
        </div>
    ) 
}
export default Profilecomp
