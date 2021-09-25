import React from 'react'
import {useDispatch} from 'react-redux'
import { decrement } from '../../authslice'
function Profilecomp() {
    const dispatch = useDispatch()
    const handlesignout = ()=>{
        window.sessionStorage.removeItem('jwt')
        dispatch(decrement())
    }
    return (
        <div>
            <h1>hellobro</h1>
            <button onClick={handlesignout}>signout</button>
        </div>
    )
}

export default Profilecomp
