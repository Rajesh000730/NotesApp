import React, { useState, useEffect } from 'react';
import './userprofile.css'
import Dose from './Doses/Dose'
import { setdatar } from '../../../authslice'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
const UserProfile = (props) => {
   const globname = useSelector((state) => state.authslicered.datar)
   const dispatch = useDispatch();
   const [i, seti] = useState(0);
   const [state1,setstate1] = useState("none")
   const [dos, setdos] = useState('')
   const [des, setdes] = useState('')
   const [fre, setfre] = useState('')
   const [doses, setdoses] = useState([])  
  
    
   const handledoschange = (e)=>{
    setdos(e.target.value)
   }
   const handledeschange = (e)=>{
    setdes(e.target.value)
   }
   const handlefrechange = (e)=>{
    setfre(e.target.value)
   }

   const [datae,setdatae] =  useState([])
    useEffect(() => {
    setdatae(globname)
}, [globname]); // Only re-run the effect if count changes
   const handleclass1 = ()=>{
     state1==="none"?setstate1("edit1"):setstate1("none");
     console.log('hi')
  } 

  const handlesubmit = ()=>{
    if(dos=="" || des=="" || fre=="") {window.alert('empty values not allowed')
      return }

    axios.post('http://localhost:5000/user/doses',{
      name: "rajesh",
      dosename: dos,
      dosage: des,
      frequency: fre,

    }).then((data)=>{console.log(data)

    }).then(()=>{
      axios.get('http://localhost:5000/user/doses',{params:{name:"rajesh"}}).then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
    })

    setstate1("none")

  }
   
  const handleclose = ()=>{
    setstate1("none")
  } 

  return (
    <div className="doses__container">
    <button onClick={handleclass1}>Add</button>
        <div className="doses__innercontainer">
           {datae.length>=1?datae.map((data)=><Dose key={data.id} id={data.id} dosename={data.dosename} description={data.description} frequency={data.frequency}/>):<h1></h1>}
           
        </div>

      <div className={state1}>
          <div className="close1" onClick={handleclose}><i className="bi bi-x-lg"></i></div>
         <div className="edit__elements">
            <input type="text" placeholder="Dosename" onChange={handledoschange} required={true}/>
            <input type="text" placeholder="Dosage" onChange={handledeschange} required={true}/>
            <input type="text" placeholder="Frequency" onChange={handlefrechange} required={true}/> 
  
         <button onClick={handlesubmit}>Submit</button>
         </div>
      </div>
  	

    </div>
  )
}

export default UserProfile
 
;