import React from 'react'
import { Redirect } from 'react-router'

function Profile(props) {
    const authenticated = props.isauthenticated
    if(!authenticated){
        return <Redirect to='/signin' />
    }
    return (
        <div>
            <h1>profile</h1>
        </div>
    )
}

export default Profile
