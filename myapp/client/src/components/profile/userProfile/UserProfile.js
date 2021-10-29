import React, { useState, useEffect } from 'react';
import './userprofile.css'
import './Doses/dose.css'
import { setdatar } from '../../../authslice'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import Dose from './Doses/Dose';

const you = (setdoses, setloader)=>{
  axios.get('http://localhost:5000/user/doses',{params:{name:"rajesh"}}).then((data)=>{
        setdoses(data.data)
      }).then(()=>{ setloader("loaderfade") })
      .catch((err)=>{
        console.log(err)
      })
}
const UserProfile = (props) => {
   const globname = useSelector((state) => state.authslicered.datar)
   const dispatch = useDispatch();
   const [loader, setloader] = useState("load");
   const [state1,setstate1] = useState("none")
   const [dos, setdos] = useState('')
   const [des, setdes] = useState('')
   const [fre, setfre] = useState('')
   const [doses, setdoses] = useState([])  
  
   
  useEffect(() => {
    you(setdoses);
    
    
  }, []) 
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

    }).then(()=>{
      setstate1("none")
      you(setdoses, setloader)
    })

    

  }
   
  const handleclose = ()=>{
    setstate1("none")
  } 
  

  return (
    <div className="doses__container">
      {/* <div className={loader}></div> */}
    <button onClick={handleclass1}>Add</button>
        <div className="doses__innercontainer">
           {doses.length>=1?doses.map((data)=><Dose key={data._id} id={data._id} dosename={data.dosename} dosage={data.dosage} frequency={data.frequency} set={setdoses} setfun = {you}/> ):<h1></h1>}
           
        </div>

      <div className={state1}>
          <div className="close1" onClick={handleclose}><i className="bi bi-x-lg"></i></div>
         <div className="edit__elements">
            
            <input id="dose" type="text" placeholder="Dosename" onChange={handledoschange} required={true} />
            <input type="text" placeholder="Dosage" onChange={handledeschange} required={true}  />
            <input type="text" placeholder="Frequency" onChange={handlefrechange} required={true} /> 
  
         <button onClick={handlesubmit}>Submit</button>
         </div>
      </div>
  	

    </div>
  )
}

export default UserProfile
 
;