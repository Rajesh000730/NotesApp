import React, {useState}from 'react'
import './profilecomp.css'
import Nav from './Nav/Nav'
import Email from './ChangeEmail/ChangeEmail'
import ChangePassword from './changePassword/ChangePassword'
import UserProfile from './userProfile/UserProfile'  
import { useSelector } from 'react-redux';
function Profilecomp() {
    const email = useSelector((state) => state.authslicered.email)
    const visible = useSelector((state) => state.authslicered.visible)
    const password = useSelector((state) => state.authslicered.password)
    const [photo,setphoto] = useState(false);

    return (
        
        <div className="profilecont">
            <Nav visible={visible}/>
            {email?<Email/>:password?<ChangePassword/>:photo?<h1>photo</h1>:<UserProfile/>}
        </div>
    ) 
}
export default Profilecomp
