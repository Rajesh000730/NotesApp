import React from 'react'
import '../static/Chart.css'
import { useState } from 'react'
import axios from 'axios'

function Chart() {
    const data = ['rajesh', 'raju']
    var i = 0;
    const [resp,setResp] = useState('hello');
    const [inpval, setInpval] = useState('');
    const handleGetUser = ()=>{
        axios.get(`http://localhost:5000/${inpval}`)
        .then(res=>res.data)
        .then(res=>setResp(res))
    }
    const handleCreate = () =>{
        axios.post('http://localhost:5000/user',{name:'rajesh',age:'19'})
        .then(res=>console.log(res))
        .catch(err=>console.log('error'))
    }
    const handlechange = (e)=>{
        setInpval(e.target.value);
        console.log(inpval)
    }

    const handleUpdateUser = ()=>{
        axios.post('http://localhost:5000/updateuser',{name:'rajesh',newname:'rajeshraichu'})
    }
    return (
        <div className="chart__container">
            <h1>{resp}</h1>
            <h1></h1>
            <input type='text' onChange={handlechange} />
            <button onClick={handleCreate}>create user</button>
            <button onClick={handleGetUser}>find user</button>
            <button onClick={handleUpdateUser}>update user</button>
             {data.map(ele=>(<li key={i++}>{ele}</li>))}

        </div>
    )
}

export default Chart
